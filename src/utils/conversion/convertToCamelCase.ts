// convert snake case to camel case (string)
const convertToCamelCaseStr = (str: string): string => {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

// convert snake case to camel case (array of objects)
const convertToCamelCaseArrayOfObjects = <T extends object>(array: T[]): T[] => {
  const arrayType = toString.call(array).slice(8, -1).toLowerCase();

  if (arrayType !== 'array') return [];
  return array.map((obj) => convertToCamelCase(obj));
};

// convert snake to camel case (object)
export const convertToCamelCase = <T extends object>(obj: T): T => {
  const result = {} as T;
  Object.entries(obj).forEach(([key, val]) => {
    const valType = toString.call(val).slice(8, -1).toLowerCase();

    if (valType === 'object') {
      val = convertToCamelCase(val as Record<string, unknown>);
    } else if (valType === 'array') {
      val = convertToCamelCaseArrayOfObjects(val as Record<string, unknown>[]);
    }
    (result as Record<string, unknown>)[convertToCamelCaseStr(key)] = val;
  });

  return result;
};
