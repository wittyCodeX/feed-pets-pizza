export const getStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (!item) {
        return null;
    }

    try {
        return JSON.parse(item) as T;
    } catch (e) {
        console.error(`Error parsing JSON from localStorage key "${key}":`, e);
        return null;
    }
}
