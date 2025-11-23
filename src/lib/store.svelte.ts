import type { AppOptions } from './types/AppOptions';
import { browser } from '$app/environment';

const useLocalStorage = (key: string, initialValue: AppOptions) => {
  let value = $state<AppOptions>(initialValue);

  if (browser) {
    const currentValue = localStorage.getItem(key);
    if (currentValue) value = JSON.parse(currentValue);
  };

  const save = () => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  };

  const get = () => {return value};
  const set = (v: AppOptions) => {
    value = v;
    save();
  }
  return {get, set}
};

export default useLocalStorage;
