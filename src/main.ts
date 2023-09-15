import readline from "node:readline/promises";
import { caesar_cipher, caesar_decipher } from "./caesar_cipher";
import { vigerence_cipher, vigerence_decipher } from "./vigerence_cipher";

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const message = await rl.question("message > ");
  rl.close();

  console.log("[caesar_cipher]");
  let code = caesar_cipher(message);
  console.log("encoded: ", code);
  console.log("decodeed: ", caesar_decipher(code));

  console.log("[vigerence_cipher]");
  code = vigerence_cipher(message, "keshav");
  console.log("encoded: ", code);
  console.log("decodeed: ", vigerence_decipher(code, "keshav"));
})();
