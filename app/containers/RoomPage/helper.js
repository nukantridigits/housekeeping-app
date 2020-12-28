const setDefaultToDoList = list => {
  return Object.keys(list).reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: false,
    }),
    {},
  );
};

export { setDefaultToDoList };
