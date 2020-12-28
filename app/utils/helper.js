export const countDuplicateValue = (arr, field) => {
  const tempObj = {};
  let resultArr = [];

  arr.actions.forEach(function(item) {
    tempObj[item[field]] = tempObj[item[field]] + 1 || 1;
  });
  resultArr = Object.keys(tempObj);

  return { tempObj, resultArr };
};
