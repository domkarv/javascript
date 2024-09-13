const mostFrequent = (arr: string[]): string => {
  const mapping: Record<string, number> = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(mapping).reduce(
    (acc, el) => (el[1] > acc[1] ? el : acc),
    [null, 0] as [string | null, number]
  )[0] as string;
};

const myStrings = ["Hello", "world", "omkar", "world", "an", "array"];
console.log(mostFrequent(myStrings));
