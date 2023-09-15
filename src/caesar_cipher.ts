import { Buffer } from "node:buffer";

function caesar_cipher(msg: string | undefined, shift = 3): string {
  if (msg === undefined || msg.trim().length === 0) return "";

  msg = msg.trim().toUpperCase();

  const buf = Buffer.alloc(msg.length, msg);
  return buf
    .map((char) =>
      char >= 65 && char <= 90 ? ((char + shift - 65) % 26) + 65 : char,
    )
    .toString();
}

function caesar_decipher(code: string | undefined, key = 3): string {
  if (!code) return "";

  const buf = Buffer.alloc(code.length, code);
  return buf
    .map((char) =>
      char >= 65 && char <= 90 ? ((char - 65 - key + 26) % 26) + 65 : char,
    )
    .toString();
}

export { caesar_cipher, caesar_decipher };
