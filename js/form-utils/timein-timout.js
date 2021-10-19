export const timeinTimeout = (documentFirst, documentSecond) => {
  const value = documentFirst.value;
  const childrenSecondElement = documentSecond.children;

  for (let i = 0; i < childrenSecondElement.length; i++) {
    if (childrenSecondElement[i].value === value) {
      childrenSecondElement[i].selected = true;
      break;
    }
  }
};
