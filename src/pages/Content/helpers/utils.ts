export function readFromLocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    if (!value)
        return null;

    try {
        return JSON.parse(value);
    } catch (e) {
        console.error(e);
    }
    return null;
}

export function writeToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
}