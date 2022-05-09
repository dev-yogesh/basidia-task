export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

/**
 * action creator function to toggle drawer
 * @param {*} open: boolean for drawer state
 * @returns
 */
export const toggleDrawer = (open) => {
  return {
    type: TOGGLE_DRAWER,
    open: open,
  };
};
