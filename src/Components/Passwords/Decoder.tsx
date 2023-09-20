import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const decodeString = (string: string, salt: string): string => {
  const ciphertext = CryptoJS.AES.decrypt(string, salt);
  return ciphertext.toString(CryptoJS.enc.Utf8);
};

const Decoder: React.FC = () => {
  const [string, setString] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [decrypted, setDecrypted] = useState<string>("");

  useEffect(() => {
    setDecrypted(decodeString(string, password));
  }, [string, password]);

  const handleStringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setString(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="border mt-2 card">
      <h3>Decode</h3>
      <div className="gap-1 p-1 d-flex w-100">
        <div className="flex-1 align-center gap-1 d-flex">
          <textarea
            value={string}
            name="string"
            onChange={handleStringChange}
            className="rounded w-100 flex-1 p-1"
            placeholder="Enter your encrypted text"
          />
          <input
            value={password}
            name="password"
            onChange={handlePasswordChange}
            className="rounded w-100 flex-1 p-1"
            placeholder="Enter your Password"
          />
        </div>
      </div>
      {decrypted && (
        <p className="d-flex flex-1 w-100 align-items-center gap-1 pr-1 pl-1">
          <label>Decrypted text: </label>
          <input
            className="w-100 flex-1 rounded p-1"
            value={decrypted}
            name="decrypted"
            disabled
          />
        </p>
      )}
    </div>
  );
};

export default Decoder;
