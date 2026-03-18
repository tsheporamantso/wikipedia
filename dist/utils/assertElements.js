export function required(selector) {
    const el = document.querySelector(selector);
    if (!el) {
        throw new Error(`Required element is not found ${selector}`);
    }
    return el;
}
export function requireAll(selector) {
    const els = document.querySelectorAll(selector);
    if (els.length === 0) {
        throw new Error(`Required element is not found ${selector}`);
    }
    return els;
}
