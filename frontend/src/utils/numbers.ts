export const commaDeliminateStringInt = (stringNum: string): string => {
  const segments: string[] = [];

  let construct = "";
  let tracker = 0;
  const split = stringNum.split("");
  for (let i = split.length - 1; i >= 0; i--) {
    const char = split[i];
    if (tracker < 3) {
      construct = char + construct;
      tracker++;
      continue;
    }

    segments.push(construct);
    construct = char;
    tracker = 1;
  }

  segments.push(construct);
  return segments.reverse().join(",");
};
