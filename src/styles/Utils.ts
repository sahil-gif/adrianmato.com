const BASE = 4; // rhythm
const UNITS = 'rem';
const FONT_RESET = 10; // due to CSS fontSize reset using rem

function createRhythm(amount: number) {
  return amount * BASE / FONT_RESET;
}

export const Side = {
  Vertical : 'vertical' ,
  Horizontal : 'horizontal',
  Top : 'top',
  Right : 'right',
  Bottom : 'bottom',
  Left : 'left'
};

export function padding(amount: number, side?: string) {
  const ryhthm = `${createRhythm(amount)}${UNITS}`;

  return {
    ...(!side ? { padding: ryhthm } : undefined),
    ...(side === Side.Vertical ? { paddingTop: ryhthm, paddingBottom: ryhthm } : undefined),
    ...(side === Side.Horizontal ? { paddingLeft: ryhthm, paddingRight: ryhthm } : undefined),
    ...(side === Side.Top ? { paddingTop: ryhthm } : undefined),
    ...(side === Side.Right ? { paddingRight: ryhthm } : undefined),
    ...(side === Side.Bottom ? { paddingBottom: ryhthm } : undefined),
    ...(side === Side.Left ? { paddingLeft: ryhthm } : undefined),
  };
}

export function margin(amount: number, side: string) {
  const ryhthm = `${createRhythm(amount)}${UNITS}`;

  return {
    ...(!side ? { margin: ryhthm } : undefined),
    ...(side === Side.Vertical ? { marginTop: ryhthm, marginBottom: ryhthm } : undefined),
    ...(side === Side.Horizontal ? { marginLeft: ryhthm, marginRight: ryhthm } : undefined),
    ...(side === Side.Top ? { marginTop: ryhthm } : undefined),
    ...(side === Side.Right ? { marginRight: ryhthm } : undefined),
    ...(side === Side.Bottom ? { marginBottom: ryhthm } : undefined),
    ...(side === Side.Left ? { marginLeft: ryhthm } : undefined),
  };
}


// max-width
// align-items
// flex
// relative
// inline-block