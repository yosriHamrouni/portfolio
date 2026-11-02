import type { CSSProperties } from 'react';

// Delay index for the `.reveal` stagger (80ms per step).
export const stagger = (i: number) => ({ '--i': i }) as CSSProperties;
