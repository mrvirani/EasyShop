

export const SIGN_UP = "SIGN_UP"
export const LOGIN = "SIGN_IN"

export const LOGOUT = 'LOGOUT'

export const VERIFY_OTP_REGISTER = 'VERIFY_OTP_REGISTER'

export const VERIFY_OTP_LOGIN = 'VERIFY_OTP_LOGIN'

export const RESEND_OTP = 'RESND_OTP'


export const signUp = (formdata) => {

    console.log("signUp ======>",formdata)

    return async (dispatch) => {

        try{
            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register',
            {
                method: 'POST',
                body: formdata
               
            }
        )
        console.log("response signUP====>", response)

        const resData = await response.json()


        console.log("resData: signUP===>",resData)

        
        dispatch({ type: SIGN_UP, resData, otpid:resData.data.otpid })
        }catch(err){
            console.error("You have error in SignUp", err);
        }

        

    }

}

// export const verifyOtpRegister = (formData) => {
//     return async dispatch => {
//         try {
//             const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register/verify-otp', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const resData = await response.json();
//             dispatch({ type: VERIFY_OTP_REGISTER, resData });
//             return true; // Return true for success
//         } catch (error) {
//             console.error('Error during OTP verification:', error);
//             return false; // Return false for failure
//         }
//     };
// };

export const verifyOtpRegister = (formdata) => {


    console.log("verifyOtpRegister=======>",formdata)

    return async dispatch => {
  
    try {
        
        const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register/verify-otp', {
            method: 'POST',
            body: formdata,
        });
        const resData = await response.json();
        dispatch({ type: VERIFY_OTP_REGISTER, resData , 
            msg:resData.msg, status:resData.status, statusCode: resData.statusCode});

    } catch (err) {
       console.error("You have an error in verify register otp ", err)
    }



   };

}


export const login = (country_code,value,props) => {

    console.log(country_code +"<=====>"+value)

    return async dispatch => {
        

        try {

            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    country_code: country_code,
                    phoneno: value,  
                    // returnSecureToken: true
                })
            }
        )

        const resData = await response.json()

        console.log(resData.statusCode)

        // if(resData.status === "success"){
        //     props.navigation.navigate('home')
        // }

        console.log('resData  of LOGIN PAGE=======>' , resData)
        dispatch({ type: LOGIN , resData
            // country_code:resData.data.country_code, otpid:resData.data.otpid, phoneno:resData.data.phoneno, msg:resData.msg,status:resData.status, statusCode:resData.statusCode
        })
            
        } catch (error) {
            console.error("Error in login", error);
        }
        
        
    }
  
}


export const verifyOtpLogin = (formdata) => {

    console.log("verifyOtpLogin=======>",formdata)

    return async dispatch => {
        // try {

        try{
            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/login/verify-otp', {
                method: 'POST',
                body: formdata,
            });

            const resData = await response.json();

            console.log("response DATA OF VERIFY OTP Login====>", response)

            console.log("resData VERIFY OTP Login:===>",resData)
    
            // console.log("Token is: " + resData.idToken)

            dispatch({type: VERIFY_OTP_LOGIN, msg:resData.msg, status:resData.status, statusCode: resData.statusCode, otpid:resData.otpid })
    

        }catch(err){
            console.error("Error in VerifyOtp", err)
        }
        };

    // return async dispatch => {
    //     // try {
    //     //     const response = await fetch('https://easyshop-5pbk.onrender.com/auth/login/verify-otp', {
    //     //         method: 'POST',
    //     //         body: formdata,
    //     //     });
    //     //     const resData = await response.json();
    //     //     dispatch({ type: VERIFY_OTP_LOGIN, resData });
    //     // } catch (error) {
    //     //     console.error('Error during OTP verification:', error);
    //     // }
    // };


}


export const resendOtp = (otpid) => {



    return async dispatch => {

        console.log("Action file otpid", otpid)

        try {

            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/resendOtp',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    otpid:otpid
                })
            }
        )

        const resData = await response.json()

        console.log("resData", resData.msg,resData.status,resData.statusCode)

        dispatch({ type: RESEND_OTP , resData, msg:resData.msg, status:resData.status, statusCode:resData.statusCode
            // country_code:resData.data.country_code, otpid:resData.data.otpid, phoneno:resData.data.phoneno, msg:resData.msg,status:resData.status, statusCode:resData.statusCode
        })
            
        } catch (error) {
            console.error("Error in Resend Otp", err)
        }

       
        
    }
  
}






// export const logOut = () =>{


//     return { type: LOGOUT}
      
// }