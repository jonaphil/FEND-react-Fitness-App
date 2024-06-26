import { gql } from "@apollo/client";
import { apolloClient } from "../Context";

export default function loadWorkoutDetails({ workoutId }) {
  const GET_WORKOUT_DETAILS = gql`
    query GetWorkoutDetails($workoutId: ID!) {
      workouts(where: { id: $workoutId }) {
        id
        name
        category
        duration
        exercises {
          ... on ExerciseWithReps {
            exercise {
              id
              name
              description
            }
            reps
          }
          ... on ExerciseWithDuration {
            exercise {
              id
              name
              description
            }
            duration
          }
        }
      }
    }
  `;
  const result = apolloClient.query({
    query: GET_WORKOUT_DETAILS,
    variables: { workoutId },
  });
  return result;
}
