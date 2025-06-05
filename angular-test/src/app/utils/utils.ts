export function flattenArray(arr: any[]): [] {
    return arr.reduce((acc, cur) => {
        Array.isArray(cur) ? acc.concat(flattenArray(cur)) : acc.push(cur);
    });
}

export function sortNumArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

export function sortStrArray(arr: string[]): string[] {
    return arr.sort((a, b) => a.localeCompare(b));
}