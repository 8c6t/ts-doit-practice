import { readFile } from "fs";

readFile("./package.json", (err: Error, buffer: Buffer) => {
  if (err) throw err;

  const content: string = buffer.toString();
  console.log(content);
});
