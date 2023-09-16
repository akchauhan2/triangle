import React, { useState, useEffect } from "react";

function Practice() {
  const [infos, setInfos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input) {
      setInfos([...infos, input]);
    }
    setInput("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    try {
      const storedInfos = JSON.parse(localStorage.getItem("infos") || "[]");
      setInfos(storedInfos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (infos.length) localStorage.setItem("infos", JSON.stringify(infos));
  }, [infos]);

  return (
    <div className="notes-keeper">
      <h2>Notes Keeper</h2>
      <form onSubmit={addInfo} className="wrapper" style={{ gap: "1em" }}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button disabled={!input} type="submit">
          Add Info
        </button>
      </form>
      {infos.map((info, index) => (
        <p key={index}>{info}</p>
      ))}
    </div>
  );
}

export default Practice;
