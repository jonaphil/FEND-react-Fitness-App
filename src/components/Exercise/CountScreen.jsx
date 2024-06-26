import { Link } from "../../../node_modules/react-router-dom/dist/index";
import ButtonLeft from "../../media/icons/ButtonLeft.svg?react";
import ButtonRight from "../../media/icons/ButtonRight.svg?react";
export default function CountScreen(_a) {
    var currentExercise = _a.currentExercise, numExercises = _a.numExercises, endPause = _a.endPause, children = _a.children;
    return (<div className="box-border flex w-full flex-row items-center justify-between gap-8 px-8">
      {currentExercise > 0 ? (<button onClick={endPause}>
          <Link to={"../".concat(currentExercise - 1)}>
            <ButtonLeft />
          </Link>
        </button>) : (<div className="w-5"/>)}
      <div className="flex h-58.5 w-58.5 flex-row items-center justify-center">
        {children}
      </div>
      {currentExercise + 1 < numExercises ? (<div className="w-5">
          <button onClick={endPause}>
            <Link to={"../".concat(currentExercise + 1)}>
              <ButtonRight />
            </Link>
          </button>
        </div>) : (<div className="w-5"/>)}
    </div>);
}
