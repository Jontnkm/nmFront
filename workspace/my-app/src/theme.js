const deviceSizes = {
    mobile: 767,
    tablet: 1200,
  };
  
  const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
    tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  };
  
  const theme = {
    device
  };
  
  export default theme;