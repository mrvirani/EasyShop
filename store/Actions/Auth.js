

export const SIGN_UP = "SIGN_UP"
export const LOGIN = "SIGN_IN"

export const LOGOUT = 'LOGOUT'

export const VERIFY_OTP_REGISTER = 'VERIFY_OTP_REGISTER'

export const VERIFY_OTP_LOGIN = 'VERIFY_OTP_LOGIN'


export const signUp = (formdata) => {


    console.log("signUp======>",formdata)

    return async (dispatch) => {

        const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register',
            {
                method: 'POST',
                body: formdata
               
            }
        )
        console.log("response signUP====>", response)

        const resData = await response.json()


        console.log("resData: signUP===>",resData)

        console.log("Token is NOT GENERATED IN SIGNUP SCREEN: " + resData.idToken)

        dispatch({ type: SIGN_UP, resData })

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
    //     // try {
    //         const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register/verify-otp', {
    //             method: 'POST',
    //             body: formdata,
    //         });

    //         const resData = await response.json();



    //         console.log("response DATA OF VERIFY OTP====>", response)

    //         console.log("resData VERIFY OTP:===>",resData)
    
    //         console.log("Token is: " + resData.idToken)

    //         dispatch({type: VERIFY_OTP_REGISTER, msg:resData.msg, status:resData.status, statusCode: resData.statusCode})






    //     //       if (resData && resData.status === 'success') {
    //     //         // OTP verification successful
    //     //         dispatch({ type: VERIFY_OTP_REGISTER, resData,success: true });
    //     //     } else {
    //     //         // OTP verification failed
    //     //         dispatch({ type: VERIFY_OTP_REGISTER,resData, success: false });
    //     //     }
    //     // } catch (error) {
    //     //     console.error('Error during OTP verification:', error);
    //     //     return false; // Return false for failure
    //     // }


    try {
        const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register/verify-otp', {
            method: 'POST',
            body: formdata,
        });
        const resData = await response.json();
        dispatch({ type: VERIFY_OTP_REGISTER, resData });
    } catch (error) {
        console.error('Error during OTP verification:', error);
    }



   };

}


export const login = (country_code,value,props) => {

    console.log(country_code +"<=====>"+value)

    return async dispatch => {

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
        
    }
  
}


export const verifyOtpLogin = (formdata) => {

    console.log("verifyOtpLogin=======>",formdata)

    return async dispatch => {
        // try {
            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/login/verify-otp', {
                method: 'POST',
                body: formdata,
            });

            const resData = await response.json();

            console.log("response DATA OF VERIFY OTP Login====>", response)

            console.log("resData VERIFY OTP Login:===>",resData)
    
            // console.log("Token is: " + resData.idToken)

            dispatch({type: VERIFY_OTP_LOGIN, msg:resData.msg, status:resData.status, statusCode: resData.statusCode, otpid:resData.otpid })
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

        dispatch({ type: LOGIN , resData
            // country_code:resData.data.country_code, otpid:resData.data.otpid, phoneno:resData.data.phoneno, msg:resData.msg,status:resData.status, statusCode:resData.statusCode
        })
        
    }
  
}






// export const logOut = () =>{


//     return { type: LOGOUT}
      
// }