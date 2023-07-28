export const capitalizeFirstLetter = (val: string) => {
  if (!val) return '';
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

export function mapOrderList(originalArr: Array<any>, orderArr: Array<string>, key: string) {
  if (!originalArr || !orderArr || !key) return [];
  return [...originalArr].sort((a, b) => orderArr.indexOf(a[key]) - orderArr.indexOf(b[key]));
}
