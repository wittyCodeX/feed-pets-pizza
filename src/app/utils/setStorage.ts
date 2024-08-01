export const setStorage = <T>(key: string, value: T): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (e) {
        console.error(`Error serializing value for localStorage key "${key}":`, e);
    }
}
