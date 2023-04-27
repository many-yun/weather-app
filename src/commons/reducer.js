import { SET_X_Y, NOW_X_Y } from './actions';
import dfs_xy_conv from '../utils/getXY';

function onGeoOK(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const x = dfs_xy_conv('toXY', lat, lon).x;
   const y = dfs_xy_conv('toXY', lat, lon).y;
}
function onGeoErr() {
   alert("Can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);

const initialState = {
   x: 37.7244475,
   y: 127.2008626,
};

export const reducer = (state = initialState, action) => {
   if (action.type === SET_X_Y) {
      return { x: action.x, y: action.y };
   }
   return state;
};
