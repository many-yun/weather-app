export const SET_X_Y = 'SET_X_Y';
export const NOW_X_Y = 'NOW_X_Y';

export const setXY = (x, y) => {
   return {
      type: SET_X_Y,
      x,
      y,
   };
};

export const nowXY = (x, y) => {
   return {
      type: NOW_X_Y,
      x,
      y,
   };
};
