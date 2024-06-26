import homeWhite from "../media/icons/HomeButton-white.svg";
import homeGrey from "../media/icons/HomeButton-grey.svg";
import dumbbellWhite from "../media/icons/HandleWeightButton-white.svg";
import dumbbellGrey from "../media/icons/HandleWeightButton-grey.svg";
import profileWhite from "../media/icons/ProfileButton-white.svg";
import profileGrey from "../media/icons/ProfileButton-grey.svg";
import { NavLink } from "react-router-dom";

export default function Navi({ activeButton }) {
  //activeButton = one of {'home', 'dumbbell', 'profile'}

  /*
  // TODO Work with NavLink!
    */
  return (
    <div className="fixed bottom-0 box-border flex h-12.5 w-full items-center justify-between rounded-t-[20px] bg-black bg-opacity-40 pb-3 pl-12 pr-13 pt-3">
      <NavLink to={"/"}>
        <img
          src={activeButton == "home" ? homeWhite : homeGrey}
          alt=""
          className="w-[25px]"
        />
      </NavLink>
      <NavLink to={"/programs"}>
        <img
          src={activeButton == "dumbbell" ? dumbbellWhite : dumbbellGrey}
          alt=""
          className="w-[37px]"
        />
      </NavLink>
      <NavLink to={"/profile"}>
        <img
          src={activeButton == "profile" ? profileWhite : profileGrey}
          alt=""
          className="w-[28px]"
        />
      </NavLink>
    </div>
  );
}
