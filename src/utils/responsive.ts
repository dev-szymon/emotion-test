/**
 * Default declarations does match DefaultThemeBreakpoints.
 * @see packages/theme-tools/src/types/ThemeBreakpoints.ts
 */
export function responsive<T>(AdPanel: T): [T, T];
export function responsive<T>(AdPanel: T, Mobile: T): [T, T, T];
export function responsive<T>(AdPanel: T, Mobile: T, Desktop: T): [T, T, T, T];

/**
 * Utility function that handles default value (at 0 index) for styled-system's array notation.
 */
export function responsive<T>(...args: Array<T>): Array<T> {
 //With standard breakpoints, it results in [below AdPanel, AdPanel->Mobile, Mobile->Desktop, Desktop and above]
 return [args[0], ...args];
}
