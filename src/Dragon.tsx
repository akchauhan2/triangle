import React from "react";
import { Dragon } from "./type";

export function DragonComponent({
  dragons,
  setDragons,
}: {
  dragons: Dragon[];
  setDragons: React.Dispatch<React.SetStateAction<Dragon[]>>;
}) {
  const getBackgroundStyle = (): React.CSSProperties => ({
    background: `url('https://via.placeholder.com/150') repeat`,
    backgroundClip: `text`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    color: `transparent`,
    fontWeight: `bold`,
    fontSize: `24px`,
    textTransform: `uppercase`,
  });

  const resetDragon = (dragon: Dragon) => {
    const newDragons: Dragon[] = dragons.map((d: Dragon) =>
      d.id === dragon.id
        ? {
            ...d,
            health: 100,
            alive: "alive",
          }
        : d
    );
    setDragons(newDragons);
  };
  const damageDragon = (dragon: Dragon) => {
    const newDragons: Dragon[] = dragons.map((d: Dragon) =>
      d.id === dragon.id
        ? {
            ...d,
            health: Math.max(0, d.health - 20),
            alive: d.health - 20 <= 0 ? "dead" : "alive",
          }
        : d
    );
    setDragons(newDragons);
  };
  return (
    <div className="dragons">
      {dragons.map((dragon: Dragon) => (
        <div
          style={{ background: `rgba(255,0,0,${1 - dragon.health / 100})` }}
          key={dragon.id}
          className="dragon"
        >
          {dragon.health < 100 && (
            <button
              className="reset-button"
              onClick={() => resetDragon(dragon)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M256 58l80 80-80 80"
                />
              </svg>
            </button>
          )}
          <p>Name: {dragon.name}</p>
          <p>Health: {dragon.health}</p>
          <p>Status: {dragon.alive}</p>
          <div style={getBackgroundStyle()}>{"dragon"[dragon.id]}</div>
          <button className="damage-btn" onClick={() => damageDragon(dragon)}>
            Damage
          </button>
        </div>
      ))}
    </div>
  );
}
export default DragonComponent;
