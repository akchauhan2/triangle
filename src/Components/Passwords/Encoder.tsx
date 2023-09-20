import { useState } from "react";
import CryptoJS from "crypto-js";

type StringOrNumber = string | number;

const encodeString = (string: StringOrNumber, salt: StringOrNumber): string => {
  const ciphertext = CryptoJS.AES.encrypt(string, salt).toString();
  return ciphertext;
};

const Encoder: React.FC = () => {
  const [string, setString] = useState<StringOrNumber>("");
  const [password, setPassword] = useState<StringOrNumber>("");
  const [encrypted, setEncrypted] = useState<StringOrNumber>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEncrypted(encodeString(string, password));
  };

  const handleStringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setString(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="border mt-2 card">
      <h3>Encode</h3>
      <form onSubmit={handleSubmit} className="gap-1 p-1 d-flex w-100">
        <div className="flex-1 align-center gap-1 d-flex">
          <textarea
            value={string}
            name="string"
            onChange={handleStringChange}
            className=" rounded w-100 flex-1 p-1"
            placeholder="Enter Your text"
          />
          <input
            value={password}
            name="password"
            onChange={handlePasswordChange}
            className=" rounded w-100 flex-1 p-1"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button type="submit">Encode</button>
        </div>
      </form>
      {encrypted && (
        <p className="d-flex flex-1 w-100 align-items-center gap-1 pr-1 pl-1">
          <label>Encrypted text: </label>
          <input
            className="w-100 flex-1 rounded p-1"
            value={encrypted}
            name="encrypted"
            disabled
          />
        </p>
      )}
    </div>
  );
};

export default Encoder;
