import {
    BrowserRouter as Router, HashRouter,
    Route, Routes
} from "react-router-dom";
import {Home} from "./Home";
import TrainerHome from "./TrainerHome";


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
  return (

        <HashRouter>
          <Routes>
            <Route path="/"element={<Home />}  />
            {/*<Route path="/profile" render={props => <Profile {...props} />} />*/}
            {/*<Route exact path="/homeclient" render={props => <ClientHome {...props} />} />*/}
            <Route path="/hometrainer" element={<TrainerHome />}  />
            {/*<Route exact path="/clientstrainer" render={props => <TrainerClients {...props} />} />*/}
            {/*<Route exact path="/profiletrainer" render={props => <TrainerProfile {...props} />} />*/}
            {/*<Route exact path="/login" render={props => <Login {...props} />} />*/}
            {/*<Route exact path="/registerclient" render={props => <RegisterClient {...props} />} />*/}
            {/*<Route exact path="/registertrainer" render={props => <RegisterTrainer {...props} />} />*/}
          </Routes>
        </HashRouter>
  );
}