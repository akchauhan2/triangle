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

  const deleteItem = (index: number): void => {
    const infoArr = [...infos];
    if (index >= 0 && index < infoArr.length) {
      infoArr.splice(index, 1);
    }
    setInfos(infoArr);
  };

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
        <div className="info align-center" key={index}>
          <p className="info-content">{info}</p>
          <button className="icon" onClick={() => deleteItem(index)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Practice;
