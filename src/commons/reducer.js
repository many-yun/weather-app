import { SET_X_Y, ADD_BOOKMARK, DEL_BOOKMARK } from './actions';

const initialState = {
   // 미쳐버리겟어용
};

export const reducer = (state = initialState, action) => {
   if (action.type === SET_X_Y) {
      return { x: action.x, y: action.y, location: action.location };
   }
   return state;
};

const initialState2 = {
   bookmarks: [],
};

export const reducer2 = (state = initialState2, action) => {
   if (action.type === ADD_BOOKMARK) {
      return {
         bookmarks: [...state.bookmarks, action.bookmark],
      };
   } else if (action.type === DEL_BOOKMARK) {
      return {
         bookmarks: state.bookmarks.filter((bookmark) => bookmark.location !== action.location),
      };
   }
   return state;
};
