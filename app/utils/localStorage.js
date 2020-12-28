const STORE_ITEM = 'store';

export const getLocalStorageState = () => {
  let store = null;

  if (localStorage.length) {
    store = localStorage.getItem(STORE_ITEM);
  }

  return store;
};

export const setLocalStorageState = store =>
  localStorage.setItem(STORE_ITEM, JSON.stringify(store));

export const cleanLocalStorageState = () => {
  if (localStorage.length) {
    const store = localStorage.getItem(STORE_ITEM);

    if (store) {
      return localStorage.removeItem(STORE_ITEM);
    }
  }

  return false;
};
