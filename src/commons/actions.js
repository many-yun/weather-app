export const SET_X_Y = 'SET_X_Y';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DEL_BOOKMARK = 'DEL_BOOKMARK';

export const setXY = (x, y, location) => {
   return {
      type: SET_X_Y,
      x,
      y,
      location,
   };
};

export const addBookmark = (bookmark) => {
   return {
      type: ADD_BOOKMARK,
      bookmark: {
         x: bookmark.x,
         y: bookmark.y,
         location: bookmark.location,
      },
   };
};

export const delBookmark = (location) => {
   return {
      type: DEL_BOOKMARK,
      location,
   };
};
