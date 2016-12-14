export function calculate(a: number, b: number) {
    if (a > 5) {
        return a + b;
    }

    if (b > 5) {
        return b - a;
    }

    return a * b;
}