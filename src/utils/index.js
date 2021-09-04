export const teaser = (text, count, ending) => {
  let slicedText = text.slice(0, count);
  return slicedText + ' ' + ending;
};
