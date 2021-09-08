import "./App.css";

import { Provider } from "react-redux";
import { Store } from "./Store";

import DrawingApp from "./DrawingApp";
import GithubUsers from "./GithubProfile";
import ToDoApp from "./TodoApp";
import PasswordGenerator from "./PasswordGenerator";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      {/* <DrawingApp /> */}
      {/* <ToDoApp /> */}
      {/* <Provider store={Store}>
        <GithubUsers />
      </Provider> */}

      {/* <PasswordGenerator /> */}

      <WeatherApp />
    </>
  );
}

export default App;
