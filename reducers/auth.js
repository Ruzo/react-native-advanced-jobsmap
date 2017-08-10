import types from '../types';

export default (state = {}, action) => {
  switch (action.type) {

    case types.FB_LOGGING_SUCCESS:
      return { fb_token: action.payload };
      break;

    case types.FB_LOGGING_FAIL:
      return { fb_token: '' }
      break;

    default:
      return state;
  
  }
}