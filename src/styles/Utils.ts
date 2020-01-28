import { fontSerifFamily, fontSemibold } from '../utils/typography';
import { ObjectInterpolation } from '@emotion/core';

const BASE = 4; // rhythm
const FONT_RESET = 10; // due to CSS fontSize reset using rem
export const UNITS = 'rem';

// TODO: do we need this? Can we re-use the rhythm creator from Typography?
function createRhythm(amount: number) {
  return (amount * BASE) / FONT_RESET;
}

export const Side = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left',
  Vertical: 'vertical',
  Horizontal: 'horizontal',
};

export function padding(amount: number, side?: string) {
  const rhythm = `${createRhythm(amount)}${UNITS}`;

  return {
    ...(side === Side.Top ? { paddingTop: rhythm } : undefined),
    ...(side === Side.Right ? { paddingRight: rhythm } : undefined),
    ...(side === Side.Bottom ? { paddingBottom: rhythm } : undefined),
    ...(side === Side.Left ? { paddingLeft: rhythm } : undefined),
    ...(!side ? { padding: rhythm } : undefined),
    ...(side === Side.Vertical
      ? { paddingTop: rhythm, paddingBottom: rhythm }
      : undefined),
    ...(side === Side.Horizontal
      ? { paddingLeft: rhythm, paddingRight: rhythm }
      : undefined),
  };
}

export function margin(amount: number, side: string) {
  const rhythm = `${createRhythm(amount)}${UNITS}`;

  return {
    ...(side === Side.Top ? { marginTop: rhythm } : undefined),
    ...(side === Side.Right ? { marginRight: rhythm } : undefined),
    ...(side === Side.Bottom ? { marginBottom: rhythm } : undefined),
    ...(side === Side.Left ? { marginLeft: rhythm } : undefined),
    ...(!side ? { margin: rhythm } : undefined),
    ...(side === Side.Vertical
      ? { marginTop: rhythm, marginBottom: rhythm }
      : undefined),
    ...(side === Side.Horizontal
      ? { marginLeft: rhythm, marginRight: rhythm }
      : undefined),
  };
}

export function lineHeight(amount: number) {
  const rhythm = `${createRhythm(amount)}${UNITS}`;
  return { ...{ lineHeight: rhythm } };
}

export function left(amount: number) {
  const rhythm = `${createRhythm(amount)}${UNITS}`;
  return { ...{ left: rhythm } };
}

const serif: ObjectInterpolation<any> = {
  fontFamily: fontSerifFamily.join(', '),
};

const semibold: ObjectInterpolation<any> = {
  fontWeight: fontSemibold,
};

export const type = { serif, semibold };
