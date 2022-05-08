export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const toggleDrawer = (open) => {
  return {
    type: TOGGLE_DRAWER,
    open: open,
  };
};
