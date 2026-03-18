export function required<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) {
    throw new Error(`Required element is not found ${selector}`);
  }
  return el as T;
}

export function requireAll<T extends HTMLElement>(
  selector: string,
): NodeListOf<T> {
  const els = document.querySelectorAll(selector);
  if (els.length === 0) {
    throw new Error(`Required element is not found ${selector}`);
  }
  return els as NodeListOf<T>;
}
