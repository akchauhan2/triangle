import "./App.scss";
import Numbers from "./Components/Numbers";
import Triangle from "./Components/Triangle";

function App() {
  return (
    <div className="app">
      <h1>Numbers & Triangle</h1>
      <div className="wrapper">
        <div className="card">
          <Numbers />
        </div>
        <div className="card">
          <Triangle />
        </div>
      </div>
      <p className="creadits">Submitted by Ajay Kumar Chauhan</p>
    </div>
  );
}

export default App;
