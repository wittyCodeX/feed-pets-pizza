export const removeStorage = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error(`Error removing localStorage key "${key}"`);
    }
}
