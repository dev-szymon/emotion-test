export function up<T extends number>(minBreakpoint: T | number) {
 return <Theme>(props: Theme): string => {
  const {
   theme: { breakpoints },
  } = props as unknown as { theme: { breakpoints: `${string}px`[] } };

  return `@media (min-width: ${breakpoints[minBreakpoint]})`;
 };
}
