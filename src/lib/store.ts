export class Store {
  static save(key: string, value: Object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getValueOrDefault(key: string, defaultValue: unknown): unknown {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        const parsed = JSON.parse(value);
        return parsed;
      } catch {}
    }

    return defaultValue;
  }
}
