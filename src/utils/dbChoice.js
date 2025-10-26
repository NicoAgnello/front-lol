const KEY = "db-choice"; // "mysql" | "mongo"

export const getDbChoice = () => localStorage.getItem(KEY) || "mysql";
export const setDbChoice = (v) => localStorage.setItem(KEY, v);
export const clearDbChoice = () => localStorage.removeItem(KEY);
export const hasDbChoice = () => !!localStorage.getItem(KEY);
