//
//
// Generic
//
//
function getFirst<T>(array: T[]): T {
  return array[0];
}

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b", "c"]);
