import "./App.css";

import { Provider } from "react-redux";
import { Store } from "./Store";

import DrawingApp from "./DrawingApp";
import GithubUsers from "./GithubProfile";
import ToDoApp from "./TodoApp";

function App() {
  return (
    <>
      {/* <DrawingApp /> */}
      {/* <ToDoApp /> */}
      <Provider store={Store}>
        <GithubUsers />
      </Provider>
    </>
  );
}

export default App;
