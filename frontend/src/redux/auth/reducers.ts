import { IAuthAction } from './actions';
import { IAuthState } from './state';

const initialState: IAuthState = {
  isAuthenticated: null,
  token: null,
  user: null,
  message: null,
};

<<<<<<< HEAD
export const authReducers = (state: IAuthState = initialState, action: IAuthAction): IAuthState => {
    switch (action.type) {
        case "@@auth/LOGIN_SUCCESS":
            console.log("success")
            return {
                isAuthenticated: true,
                token: action.token,
                user: action.user,
                message: null,
            }
        case "@@auth/LOGIN_FAILED":
            return {
                isAuthenticated: false,
                token: null,
                user: null,
                message: action.message,
            }
        case "@@auth/LOGOUT":
            return {
                isAuthenticated: false,
                token: null,
                user: null,
                message: null,
            }
        // case "@@auth/REGISTER_FAILED":
        //     return {
        //         isAuthenticated: false,
        //         token: null,
        //         user: null,
        //         message: null,
        //     }
        // case "@@auth/REGISTER_SUCCESS":
        // return {
        //     isAuthenticated: false,
        //     token: null,
        //     user: null,
        //     message: null,
        // }
        default:
            return state
    }
}
=======
export const authReducers = (
  state: IAuthState = initialState,
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case '@@auth/LOGIN_SUCCESS':
      return {
        isAuthenticated: true,
        token: action.token,
        user: action.user,
        message: null,
      };
    // both cases are going to return the following
    case '@@auth/LOGIN_FAILED':
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        message: action.message,
      };
    case '@@auth/LOGOUT':
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        message: null,
      };
    case '@@auth/REGISTER_FAILED':
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        message: null,
      };
    case '@@auth/REGISTER_SUCCESS':
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        message: null,
      };
    default:
      return state;
  }
};
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
