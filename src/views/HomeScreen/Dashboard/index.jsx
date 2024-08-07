import { Link } from "react-router-dom";
import { useUserContext } from "@contexts/hooks";
import Card from "@components/simple Components/Card";
import Button from "@components/simple Components/Button";
import LoginButton from "@components/simple Components/auth0/LoginButton";
import WomanSVG from "@assets/icons/WomanYoga.svg?react";

export default function Dashboard() {
  const { user } = useUserContext();
  return (
    <>
      <div className="flex flex-row items-center justify-between self-stretch">
        <h1 className="">Hi {user.name}!</h1>
        <LoginButton />
      </div>
      <WomanSVG
        className={"mb-6 mt-4 min-h-40 self-center"}
        alt={"Picture of a human, stretching in the morning"}
      />

      {user?.current?.workout ? (
        <>
          <div className="flex items-center justify-between self-stretch">
            <h2>Dein Workout heute</h2>
            <Link className={"text-xs"} to={`./training/start/`}>
              {/* FIXME Link to */}
              Trainingsplan
            </Link>
          </div>
          <Link
            className={"h-fit self-stretch text-xs"}
            to={`/training/start/`}
          >
            <Card
              bgColor={"dmedium"}
              justify={"end"}
              shadow={"l"}
              size={"m"}
              className={"gap-4"}
            >
              <h3>Tag {user.current.day}</h3>
              <h2>{user.current.programName}</h2>
              <p className="pt-1 text-xs">
                {user.current.workout.duration} min -{" "}
                {user.current.workout.focus}
              </p>
            </Card>
          </Link>
        </>
      ) : (
        <Link
          className={"mt-20 h-fit self-center text-xs"}
          to={`/home/programs`}
        >
          <Button>Starte ein Programm!</Button>
        </Link>
      )}
    </>
  );
}
