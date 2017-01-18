let x: number = 0;

export function iterator(cb: (n: number) => void): void {
    cb(++x);
}
