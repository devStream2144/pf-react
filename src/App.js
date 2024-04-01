import logo from "./logo.svg";
import "./App.css";
import Routers from "./Routes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Routers /> */}
      <Home />
      <div
        style={{
          border: "2px solid red",
          width: "100%",
          height: "100vh",
          // zIndex: 100,
        }}
      ></div>

      <div
        style={{
          border: "2px solid red",
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 100,
        }}
      ></div>
    </div>
  );
}

export default App;
