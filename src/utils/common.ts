type Comparable = {
  index: number;
};

export function sortByNumberAttr(a: Comparable, b: Comparable): number {
  if (a.index < b.index) {
    return -1;
  }

  if (a.index > b.index) {
    return 1;
  }

  return 0;
}
