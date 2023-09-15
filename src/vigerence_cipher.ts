import { Buffer } from "node:buffer";

export function vigerence_cipher(msg: string, key: string): string {
  const key_buf = Buffer.alloc(key.length, key.toUpperCase(), "utf8");

  return msg
    .toUpperCase()
    .split(" ")
    .map((value) =>
      Buffer.alloc(value.length, value.toUpperCase(), "utf8")
        .map(
          (char, index) =>
            ((char + key_buf[index % key_buf.length] - 2 * 65) % 26) + 65,
        )

        .toString(),
    )
    .join(" ");
}

export function vigerence_decipher(code: string, key: string): string {
  const key_buf = Buffer.alloc(key.length, key.toUpperCase(), "utf8");

  return code
    .split(" ")
    .map((value) =>
      Buffer.alloc(value.length, value, "utf8")
        .map(
          (char, index) =>
            ((char - key_buf[index % key_buf.length] + 26) % 26) + 65,
        )
        .toString(),
    )
    .join(" ");
}
