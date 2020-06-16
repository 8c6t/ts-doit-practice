import { rangeGenerator } from "./rangeGenerator";

let iterator = rangeGenerator(1, 1 + 3);
while (1) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

for (let value of rangeGenerator(4, 6 + 1)) {
  console.log(value);
}
