import {
    BrowserRouter as Router, HashRouter,
    Route, Routes
} from "react-router-dom";
import {Home} from "./Home";
import TrainerHome from "./TrainerHome";
import TrainerClients from "./TrainerClients";
import TrainerProfile from "./TrainerProfile";

import { useEffect } from "react";

function HomeScreen() {
  return (
      <div>
        <h1>Home!</h1>
      </div>
  );
}

function SettingsScreen() {
  return (
      <div>
        <h1>Settings!</h1>
      </div>
  );
}

export default function App() {

  useEffect(() => {
    fetch(`https://traininggurubackend.onrender.com/Client`)
      .then((response) => response.json())
     .then((actualData) => console.log(actualData[0].Name));
   }, []);

  return (

        <HashRouter>
          <Routes>
            <Route path="/" element={<TrainerHome />}  />
            {/*<Route path="/profile" render={props => <Profile {...props} />} />*/}
            {/*<Route exact path="/homeclient" render={props => <ClientHome {...props} />} />*/}
            {/* <Route path="/hometrainer" element={<TrainerHome />}  /> */}
            <Route path="/clientstrainer" element={<TrainerClients />} />
            <Route path="/profiletrainer" element={<TrainerProfile />} />
            {/*<Route exact path="/login" render={props => <Login {...props} />} />*/}
            {/*<Route exact path="/registerclient" render={props => <RegisterClient {...props} />} />*/}
            {/*<Route exact path="/registertrainer" render={props => <RegisterTrainer {...props} />} />*/}
          </Routes>
        </HashRouter>
  );
}