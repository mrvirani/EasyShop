


import { SIGN_UP, VERIFY_OTP_REGISTER ,LOGIN, VERIFY_OTP_LOGIN,RESEND_OTP} from "../Actions/Auth";

const initialState = {
    signUpData: null, // Initial state for signed up data
    otpVerificationStatus: null, // Initial state for OTP verification status
    status:null,
    msg: null,
    statusCode: null, 
    otpid:null,
    statusRegister:null,
    statusLogin:null,
    loginData:null,
    Resendmsg:null,
    ResendstatusCode:null,
    Resendotpid:null


};


export default (state = initialState, action) => {


    switch (action.type) {


        // case LOGOUT:
        //     return initialState

        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.resData,
                otpid:action.otpid
                
            }
        }

        case VERIFY_OTP_REGISTER: {
            return {
                ...state,
                statusRegister:action.status,
                msg: action.msg,
                statusCode:action.statusCode
            };
        }

        case LOGIN:{
            return {
                ...state,
                // country_code:action.country_code,
                // otpid: action.otpid,
                // phoneno:action.phoneno,
                // msg:action.msg,
                // status:action.status,
                // statusCode:action.statusCode
                loginData:action.resData

            }
        }

        case VERIFY_OTP_LOGIN:{
            return {
                ...state,
                statusLogin:action.status,
                msg:action.msg,
                statusCode:action.statusCode,
                otpid:action.otpid
            }
        }

        case RESEND_OTP:{
            return {
                ...state,
                Resendmsg:action.msg,
                ResendstatusCode:action.statusCode,
                Resendotpid:action.otpid
            }
        }
        
        default:
            return state

    }

}
