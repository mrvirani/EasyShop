


import { SIGN_UP, VERIFY_OTP_REGISTER } from "../Actions/Auth";

const initialState = {
    signUpData: null, // Initial state for signed up data
    otpVerificationStatus: null, // Initial state for OTP verification status
    status:null,
    msg: null,
    statusCode: null

};


export default (state = initialState, action) => {


    switch (action.type) {


        // case LOGOUT:
        //     return initialState

        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.resData,
                
            }
        }

        case VERIFY_OTP_REGISTER: {
            return {
                ...state,
                status:action.status,
                msg: action.msg,
                statusCode:action.statusCode
               
            };
        }

        // case LOGIN:{
        //     return {
        //         token:action.token,
        //         userId: action.userId
        //     }

        // }

        default:
            return state

    }

}
