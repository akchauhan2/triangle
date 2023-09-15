import React from "react";
import "./App.scss";
import Numbers from "./Components/Numbers";
import Triangle from "./Components/Triangle";
import Dragon from "./Dragon";
import { Alive, Dragon as DragonType } from "./type";

function App() {
  const [dragons, setDragons] = React.useState<DragonType[]>(
    new Array(5).fill(0).map((_, id) => ({
      id,
      name: "Dragon " + (id + 1),
      health: 100,
      alive: "alive" as Alive,
    }))
  );
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

      <Dragon dragons={dragons} setDragons={setDragons} />

      <p className="creadits">Submitted by Ajay Kumar Chauhan</p>
    </div>
  );
}

export default App;
