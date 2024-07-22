var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createBrowserRouter, redirect, defer } from "react-router-dom";
import ErrorPage from "@views/StatusPages/Error";
import RouterRoot from "@views/RouterRoot/index";
import HomeScreen from "@views/HomeScreen";
import Dashboard from "@views/HomeScreen/Dashboard";
import ProgramsList from "@views/HomeScreen/ProgramsList";
import Profile from "@views/HomeScreen/Profile";
import CreateEntries from "@views/HomeScreen/CreateEntries";
import Program from "@views/Program";
import ProgramDetails from "@views/Program/ProgramDetails";
import Training from "@views/Training";
import StartWorkout from "@views/Training/StartWorkout";
import Workout from "@views/Training/Workout";
import Exercise from "@views/Training/Workout/Exercise";
import FinishWorkout from "@views/Training/FinishWorkout";
import LoadingPage from "@views/StatusPages/Loading";
import getProgramsList from "@adapters/apolloClient/queries/getProgramsList";
import getProgramDetails from "@adapters/apolloClient/queries/getProgramDetails";
import getWorkoutDetails from "@adapters/apolloClient/queries/getWorkoutDetails";
import getEntryList from "@adapters/apolloClient/queries/getEntryList";
var router = createBrowserRouter([
    //FIXME: more elegant way, 2 * "/" ??
    {
        path: "/",
        //FIXME: Warum async?
        loader: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, redirect("/home/dashboard/")];
            });
        }); },
    },
    {
        path: "/",
        element: <RouterRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home/",
                element: <HomeScreen />,
                children: [
                    {
                        path: "dashboard/",
                        element: <Dashboard />,
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: "programs/",
                        element: <ProgramsList />,
                        errorElement: <ErrorPage />,
                        loader: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var programsPromise;
                            return __generator(this, function (_a) {
                                programsPromise = getProgramsList();
                                return [2 /*return*/, defer({
                                        promise: programsPromise,
                                    })];
                            });
                        }); },
                    },
                    {
                        path: "profile/",
                        element: <Profile />,
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: "generator/",
                        element: <CreateEntries />,
                        loader: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var entriesPromise;
                            return __generator(this, function (_a) {
                                entriesPromise = getEntryList();
                                return [2 /*return*/, defer({
                                        promise: entriesPromise,
                                    })];
                            });
                        }); },
                    },
                ],
            },
            {
                path: "hello-world",
                element: <LoadingPage />,
            },
            {
                path: "program/:programId/",
                element: <Program />,
                loader: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                    var promise;
                    var params = _b.params;
                    return __generator(this, function (_c) {
                        promise = getProgramDetails(params.programId);
                        return [2 /*return*/, defer({
                                promise: promise,
                            })];
                    });
                }); },
                children: [
                    {
                        path: "details/",
                        element: <ProgramDetails />,
                    },
                ],
            },
            {
                path: "training/",
                element: <Training />,
                children: [
                    {
                        path: "start/",
                        element: <StartWorkout />,
                    },
                    {
                        path: "workout/:workoutId/",
                        element: <Workout />,
                        id: "workout",
                        loader: function (_a) {
                            var params = _a.params;
                            var promise = getWorkoutDetails(params.workoutId);
                            return defer({
                                promise: promise,
                            });
                        },
                        children: [
                            {
                                path: ":exerciseIndex/",
                                element: <Exercise />,
                            },
                        ],
                    },
                    {
                        path: "workout/:workoutId/end/",
                        element: <FinishWorkout />,
                    },
                ],
            },
        ],
    },
]);
export default router;