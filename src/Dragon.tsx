import React from "react";
import { Dragon } from "./type";

export function DragonComponent({
  dragons,
  setDragons,
}: {
  dragons: Dragon[];
  setDragons: React.Dispatch<React.SetStateAction<Dragon[]>>;
}) {
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
          <p>Name: {dragon.name}</p>
          <p>Health: {dragon.health}</p>
          <p>Status: {dragon.alive}</p>
          <button className="damage-btn" onClick={() => damageDragon(dragon)}>
            Damage
          </button>
        </div>
      ))}
    </div>
  );
}
export default DragonComponent;
