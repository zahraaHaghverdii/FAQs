// theme.js
export const createTheme = (customBreakpoints = {}) => {
  const defaultBreakpoints = {
    mobile: "767px",
    tablet: "768px",
    desktop: "1024px",
  };

  // ادغام نقاط شکست پیش‌فرض و سفارشی
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

  return {
    breakpoints,
  };
};
