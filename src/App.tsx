import React, { useState, useEffect } from "react";
import "./App.scss";
import Numbers from "./Components/Numbers";
import Triangle from "./Components/Triangle";
import Dragon from "./Dragon";
import Notes from "./Components/Notes";
import Passwords from "./Components/Passwords";

type ComponentID = string | undefined | null;
interface Components {
  id: ComponentID;
  heading: string;
  Component: JSX.Element;
}
const TriangleApp: React.FC = () => {
  return (
    <div className="flex-1 flex-column gap-1 d-flex">
      <h1>Numbers & Triangle</h1>
      <div className="wrapper triangle-wrapper">
        <div className="card">
          <Numbers />
        </div>
        <div className="card">
          <Triangle />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [triangleAsApp, setTriangleAsApp] = useState<boolean>(false);
  const defaultApps = [
    {
      id: "dragons",
      Component: <Dragon />,
      heading: "Dragon GUI",
    },
    {
      id: "passwords",
      Component: <Passwords />,
      heading: "Password Encryptor/Decryptor",
    },
    {
      id: "notes",
      Component: <Notes />,
      heading: "Create Notes to keep on your local machine.",
    },
  ];
  const [components, setComponent] = useState<Components[]>(defaultApps);
  useEffect(() => {
    if (triangleAsApp) {
      setComponent((prev: Components[]): Components[] => [
        {
          id: "triangle",
          heading: "Triangle and Numbers",
          Component: <TriangleApp />,
        },
        ...prev,
      ]);
    } else {
      setComponent((prev: Components[]): Components[] =>
        prev.filter((e) => e.id !== "triangle")
      );
    }
  }, [triangleAsApp]);
  const [active, setActive] = useState<ComponentID>(null);
  const handleToggle = (id: ComponentID): void => {
    setActive((prev: ComponentID): ComponentID => (prev === id ? null : id));
    if (id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        element &&
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
  };

  return (
    <div className="app">
      {!triangleAsApp && <TriangleApp />}
      <div className="bg flex-1">
        <div className="d-flex justify-content-center align-items-center gap-1 text-center relative-top-0">
          <h3 className="flex-1 text-center">Interactive Application</h3>
          <button
            className="triBtn"
            onClick={() => setTriangleAsApp((e) => !e)}
          >
            Toggle Triangle
          </button>
        </div>
        <div className="toggleBtns">
          {components.map((e) => (
            <div
              key={e.id}
              id={e.id || e.heading}
              className={active === e.id ? "active-border" : ""}
            >
              <button
                className={`toggleBtn ${active === e.id && "active-toggleBtn"}`}
                onClick={() => handleToggle(e.id)}
              >
                {e.heading}
              </button>
              {active === e.id && e.Component}
            </div>
          ))}
        </div>
      </div>
      <p className="creadits">Submitted by Ajay Kumar Chauhan</p>
    </div>
  );
}

export default App;
