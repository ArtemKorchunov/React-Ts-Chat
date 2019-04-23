export const TOKEN_ID = 'tokenId';

export const localStorageApi = {
   getItem(key: string) {
    return localStorage[key];
  },
  setItem(prop: string, value: object): void {
    localStorage[prop] = value;
  },
 removeItem(prop: string): void {
    localStorage.removeItem(prop);
  },
  clear(): void {
    localStorage.clear();
  }
}