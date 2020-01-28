import Typography from 'typography';

export const fontSemibold = 600;
export const fontSerifFamily = ['EB Garamond', 'Georgia', 'serif'];
export const fontBaseFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
];

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.4,
  scaleRatio: 1,
  headerWeight: fontSemibold, // semibold
  bodyFontFamily: fontBaseFamily,
  headerFontFamily: fontBaseFamily,
  includeNormalize: true,
});

export default typography;
