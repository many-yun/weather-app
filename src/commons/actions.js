export const SET_X_Y = 'SET_X_Y';

export const setXY = (x, y, location) => {
   return {
      type: SET_X_Y,
      x,
      y,
      location,
   };
};
