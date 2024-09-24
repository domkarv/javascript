const mostFrequent = (arr: string[]): string => {
  const mapping: Record<string, number> = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  // console.log(mapping);
  // console.log(Object.entries(mapping));

  return Object.entries(mapping).reduce(
    (acc, el) => (el[1] > acc[1] ? el : acc),
    ["", 0]
  )[0] as string;
};

const myStrings = ["Hello", "world", "omkar", "world", "an", "array"];

mostFrequent(myStrings);
