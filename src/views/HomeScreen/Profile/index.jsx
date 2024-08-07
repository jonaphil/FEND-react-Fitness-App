import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "@contexts/hooks";
import Card from "@components/simple Components/Card";
import ProgressCircle from "@components/simple Components/ProgressCircle/ProgressCircle";
import LogoutButton from "@components/simple Components/auth0/LogoutButton";

export default function Profile() {
  const { user } = useUserContext();
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <div>is Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-row justify-between self-stretch">
        <h2 className="">{user.name}</h2>
        <LogoutButton />
      </div>
      <div className="mb-9 mt-22 flex flex-col items-center gap-2">
        <img
          className="h-30 w-30 rounded-full bg-gradient-blue"
          src={`${user.image}`}
          alt=""
        />
        {/* FIXME: LinkTo */}
        <Link to={"/"}>Profil bearbeiten</Link>
      </div>
      <div className="flex w-full flex-col gap-2">
        <p>Aktueller Trainingsplan</p>
        <Card size={"s"} bgColor={"dmedium"} shadow={"m-strong"}>
          <div className="flex flex-row items-center gap-6">
            <ProgressCircle
              progress={user.current.progress}
              elementSize={"15.5"}
            >
              {user.current.progress}%
            </ProgressCircle>
            <div className="flex flex-col items-stretch">
              <p>{user.current.programName}</p>
              <p className="text-xs">
                {user.current.day - 1} von {user.current.length} geschafft
              </p>
            </div>
          </div>
        </Card>
      </div>
      {/* FIXME: Remove for Public Version. */}
      <Link className={"mt-4 rounded-lg border px-2"} to={"/home/generator"}>
        <button>Zufallsgenerator für Einträge</button>
      </Link>
    </>
  );
}
