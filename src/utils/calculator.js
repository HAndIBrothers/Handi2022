export const sixteenDiff = (_base, _diff) => {
  const diff = Number("0x" + _base) - Number("0x" + _diff);
  return diff.toString(16);
};
