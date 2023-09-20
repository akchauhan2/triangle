import Encoder from "./Encoder";
import Decoder from "./Decoder";

function Passwords() {
  return (
    <div className="border card d-block-imp shadow shadow-2">
      <h3 className="text-center">
        Secure your confidential messages by encrypting them into a string that
        can only be decrypted using your password.
      </h3>

      <Encoder />
      <Decoder />
    </div>
  );
}

export default Passwords;
