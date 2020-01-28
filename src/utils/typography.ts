import Typography from 'typography';

export const fontBaseFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
];
export const fontSerifFamily = ['EB Garamond', 'Georgia', 'serif'];
export const fontSemibold = 600;

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
