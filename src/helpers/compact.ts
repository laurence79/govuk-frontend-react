export const compact = <T>(array: Array<T>): NonNullable<T>[] => {
  return array.reduce((memo, element) => {
    if (element !== null && typeof element !== 'undefined') {
      memo.push(element as NonNullable<T>);
    }
    return memo;
  }, [] as NonNullable<T>[]);
};
