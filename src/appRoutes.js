import {LoginPage} from "./pages/LoginPage";
import {TrainersPage} from "./pages/TrainersPage";
import {TrainerPage} from "./pages/TrainerPage";
import {TrainingsPage} from "./pages/TrainingsPage";

import { LOCATIONS } from "./constantVariables";

export const APP_ROUTES = [
  {path : LOCATIONS.loginPage , Component : LoginPage},
  {path : LOCATIONS.trainerPage , Component : TrainerPage},
  {path : LOCATIONS.trainersPage , Component : TrainersPage},
  {path : LOCATIONS.trainingsPage , Component : TrainingsPage}
]