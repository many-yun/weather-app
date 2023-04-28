import { SET_X_Y } from './actions';

const initialState = {
   // 미쳐버리겟어용
};

export const reducer = (state = initialState, action) => {
   if (action.type === SET_X_Y) {
      return { x: action.x, y: action.y, location: action.location };
   }
   return state;
};
