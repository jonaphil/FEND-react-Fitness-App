import { Suspense, useRef } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import Card from "@components/simple Components/Card";
import Spinner from "@components/simple Components/Suspense/Spinner";
import ErrorElement from "@components/simple Components/ErrorElement";
import {
  CreateRandomExerciseButton,
  CreateRandomWorkoutButton,
  CreateRandomProgramButton,
} from "@components/Page Components/EntryGenerator";

export default function CreateEntries() {
  // const { exerciseList, programsList, workoutList, assetList } =
  //   useUpdatedEntries;
  const { queryRefPromise } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <Card
            bgColor={"dmedium"}
            className={"animate-pulse"}
            justify={"center"}
            items={"center"}
          >
            <Spinner />
          </Card>
        }
      >
        <Await resolve={queryRefPromise} errorElement={<ErrorElement />}>
          {(queryRef) => {
            return <GeneratorButtonsResolved queryRef={queryRef} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

function GeneratorButtonsResolved({ queryRef }) {
  console.log(queryRef);
  const { data } = useReadQuery(queryRef);
  const { assets } = data;

  // TODO Update/Refetch data after successfull addition

  const exercises = useRef([...data.exercises]);
  const workouts = useRef([...data.workouts]);
  const programs = useRef([...data.programs]);
  const showObject = () => {
    console.log(exercises);
    console.log(workouts);
    console.log(programs);
  };

  // TODO Implement some kind of cache or Refetching

  return (
    <>
      <CreateRandomExerciseButton
        addExerciseToCache={(exerciseObj) => {
          if (!exercises.current.includes(exerciseObj)) {
            console.log(exercises.current.slice(-1));
            exercises.current = [...exercises.current, exerciseObj];
          }
        }}
      />
      <CreateRandomWorkoutButton
        addWorkoutToCache={(workoutObj) => {
          if (!workouts.current.includes(workoutObj)) {
            workouts.current.push(workoutObj);
          }
        }}
        exerciseList={exercises.current}
      />
      <CreateRandomProgramButton
        addProgramToCache={(programObj) => {
          if (!programs.current.includes(programObj)) {
            programs.current.push(programObj);
          }
        }}
        workoutList={workouts.current}
        assetList={assets}
      />
      <button className="rounded-lg border px-4" onClick={showObject}>
        Show Object!
      </button>
    </>
  );
}
