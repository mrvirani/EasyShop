import  AsyncStorage  from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"


export const SIGN_UP = "SIGN_UP"
export const LOGIN = "SIGN_IN"

export const LOGOUT = 'LOGOUT'

export const VERIFY_OTP_REGISTER = 'VERIFY_OTP_REGISTER'

export const VERIFY_OTP_LOGIN = 'VERIFY_OTP_LOGIN'

export const RESEND_OTP = 'RESND_OTP'

export const SAVED_CARDS = 'SAVED_CARDS'

export const GET_USER_DETAILS = 'GET_USER_DETAILS'


export const USER_DETAILS = 'USER_DETAILS'

export const SEND_CARD_DETAILS= 'SEND_CARD_DETAILS'


export const signUp = (formdata) => {

    console.log("signUp ======>",formdata)

    return async (dispatch) => {

        try{
            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register',
            {
                method: 'POST',
                body: formdata
               
            })
            console.log("response signUP====>", response)

            const resData = await response.json()

            // if(!response.ok){
            //     // throw new Error('You have an Error in SignUp response ')
            //     throw new Error(resData.msg || "An unexpected error occurred.");
            // }

            console.log("resData: signUP===>",resData)

            dispatch({ type: SIGN_UP, resData, 
                // otpid:resData.data.otpid
             })
            return  Promise.resolve(resData);

        }catch(err){
            console.error("You have error in SignUp", err);
            return Promise.reject(err);
        }
    }

}


export const verifyOtpRegister = (formdata) => {


    console.log("verifyOtpRegister=======>",formdata)

    return async dispatch => {
  
    try {
        
        const response = await fetch('https://easyshop-5pbk.onrender.com/auth/register/verify-otp', {
            method: 'POST',
            body: formdata,
        });
        const resData = await response.json();

        
        // if(!response.ok){
        //     throw new Error(resData.msg || 'An error occurred during registration.')
        // }

        dispatch({ type: VERIFY_OTP_REGISTER, resData , 
            msg:resData.msg, status:resData.status, statusCode: resData.statusCode});
            return  Promise.resolve(resData);

    } catch (error) {
       console.error("Error in Register User ", error)
       return Promise.reject(error);
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

        return Promise.resolve(resData)
            
        } catch (error) {
            console.error("Error in login", error);
            return Promise.reject(error)
        }
        
        
    }
  
}


export const verifyOtpLogin = (country_code, phoneno, otpid, enteredotp) => {

    console.log("verifyOtpLogin=======>",country_code, phoneno, otpid, enteredotp)

    return async dispatch => {
        // try {

        try{
            const response = await fetch('https://easyshop-5pbk.onrender.com/auth/login/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    country_code: country_code,
                    phoneno: phoneno,  
                    otpid:otpid,
                    enteredotp:enteredotp
                    // returnSecureToken: true
                })
            });

            const resData = await response.json();

            console.log("response DATA OF VERIFY OTP Login====>", response)

            console.log("resData VERIFY OTP Login:===>",resData)


            dispatch({type: VERIFY_OTP_LOGIN, msg:resData.msg, status:resData.status, statusCode: resData.statusCode, otpid:resData.otpid })
            
            return Promise.resolve(resData)

        }catch(error){
            console.error("Error in VerifyOtp", error)
            return Promise.reject(error)
        }
        };
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
        return Promise.resolve(resData)
            
        } catch (error) {
            console.error("Error in Resend Otp", err)
            return Promise.reject(error)
        }

       
        
    }
  
}


export const getUserDetails = () =>{

    return async dispatch =>{

        try{

            const bearerToken = await AsyncStorage.getItem('accessToken');

            console.log("bearerToken==>" ,bearerToken)


              const refreshToken = async () => {
                try {
                    const refresh = await AsyncStorage.getItem('refreshToken');
                    console.log('refresh token===>', refresh)

                    const response = await fetch('https://easyshop-5pbk.onrender.com/auth/refreshAccessToken', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ refreshToken: refresh })
                    });
                    const data = await response.json();

                    if (data.status === 'success') {
                        console.log("New Access Token ===>", data.data.accessToken);
                        await AsyncStorage.setItem('userToken', data.data.accessToken);
                        bearerToken = data.data.accessToken; // Update the bearerToken
                        return true;
                    } else {
                        console.log('Failed to refresh token:', data.msg);
                        return false;
                    }
                } catch (error) {
                    console.log('Error refreshing token:', error);
                    return false;
                }
            };



            const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/accountdetails',{
                method: 'GET',
                headers: {
                  'Authorization':`Bearer ${bearerToken}`,
            }});
            
            console.log("getUserDetailss",response)


            if (response.status === 'error' ) { // Token expired
                const tokenRefreshed = await refreshToken();
                if (tokenRefreshed) {
                    // Retry the getUserDetails request with the new token
                    const refreshedResponse = await fetch('https://easyshop-5pbk.onrender.com/userprofile/accountdetails', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${bearerToken}`,
                        }
                    });
                    const refreshedResData = await refreshedResponse.json();
                    console.log("resdata of getUserDetails after token refresh", refreshedResData);
                    dispatch({ type: GET_USER_DETAILS, resData: refreshedResData });
                    return Promise.resolve(refreshedResData);
                } else {
                    console.log("Failed to refresh token. Unable to fetch user details.");
                    return Promise.reject("Failed to refresh token");
                }
            } else {
                const resData = await response.json();
                console.log("else part resdata", resData);
                dispatch({ type: GET_USER_DETAILS, resData });
                return Promise.resolve(resData);
            }
    
            // const resData = await response.json();
    
            // console.log("resdata of getUserDetails", resData);
    
            // dispatch({ type: GET_USER_DETAILS, resData})
    
            // return  Promise.resolve(resData);

        }
        catch(error){
            console.log("err is:::" , error)
        }
   
    }
}


export const saved_cards = () =>{

    return async dispatch =>{

        try{

            const bearerToken = await AsyncStorage.getItem('userToken');

            console.log(bearerToken)

            const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/cards',{
                method: 'GET',
                headers: {
                  'Authorization':`Bearer ${bearerToken}`,
            }});
    
            
            console.log("response saved Cards",response)
    
            const resData = await response.json();
    
            console.log("resdata of saved cards", resData);
    
            dispatch({ type: SAVED_CARDS, resData})
    
            return  Promise.resolve(resData);

        }
        catch(error){
            console.log("err is:::" , error)
        }
   
    }
}

export const sendCardDetails = (cardNumber,name, cvv, expiry) =>{

    return async dispatch =>{

        try{

            const bearerToken = await AsyncStorage.getItem('userToken');

            console.log(bearerToken)

            const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/cards',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${bearerToken}`,
                },
                body: JSON.stringify({
                    card_num:cardNumber,
                    holder_name:name, 
                    cvv:cvv, 
                    expiry:expiry
                }),
                });
    
            console.log("response sendCardDetails", response)
    
            const resData = await response.json();
    
            console.log("resdata of sendCardDetails", resData);
    
            dispatch({ type: SEND_CARD_DETAILS, resData})
    
            return  Promise.resolve(resData);

        }
        catch(error){
            console.log("err is:::" , error)
        }
   
    }
}


// export const sendAdress = (cardNumber,name, cvv, expiry) =>{

//     return async dispatch =>{

//         try{

//             const bearerToken = await AsyncStorage.getItem('userToken');

//             console.log(bearerToken)

//             const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/cards',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization':`Bearer ${bearerToken}`,
//                 },
//                 body: JSON.stringify({
//                     card_num:cardNumber,
//                     holder_name:name, 
//                     cvv:cvv, 
//                     expiry:expiry
//                 }),
//                 });
    
//             console.log("response sendCardDetails", response)
    
//             const resData = await response.json();
    
//             console.log("resdata of sendCardDetails", resData);
    
//             dispatch({ type: SEND_CARD_DETAILS, resData})
    
//             return  Promise.resolve(resData);

//         }
//         catch(error){
//             console.log("err is:::" , error)
//         }
   
//     }
// }


export const getAddressDetails = () =>{

    return async dispatch =>{

        try{

            const bearerToken = await AsyncStorage.getItem('userToken');

            console.log("getAddressDetails bearerToken==>" ,bearerToken)

            const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/address',{
                method: 'GET',
                headers: {
                  'Authorization':`Bearer ${bearerToken}`,
            }});
    
            
            console.log("response getAddressDetails",response)
    
            const resData = await response.json();
    
            console.log("resdata of getAddressDetails", resData);
    
            dispatch({ type: SAVED_CARDS, resData})
    
            return  Promise.resolve(resData);
        }
        catch(error){
            console.log("err is:::" , error)
        }
   
    }
}






export const updateuserDetails = (firstName, lastName, email, phoneNo) => {

    // console.log("updateuserDetails ======>", formData)
    console.log("iuiuiuuiuiuiuiuiu====>",firstName, lastName, email, phoneNo)

    return async (dispatch) => {

        try {

            const bearerToken = await AsyncStorage.getItem('userToken');

            console.log("bearerToken is  ========>",bearerToken)

            Alert.alert("bearerToken token is:" ,bearerToken)
            
            const response = await fetch('https://easyshop-5pbk.onrender.com/userprofile/',
                {
                method: 'POST',
                headers: {
                  'Authorization':`Bearer ${bearerToken}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname:firstName,
                    lastname:lastName, 
                    email:email, 
                    phoneno:phoneNo
                }),
            })
               
            console.log("response updateuserDetails====>", response)

            const resData = await response.json()

            // if (!response.ok) {
            //     // Handle non-200 response (error)
            //     const errorText = await response.text(); // Get the error response as text
            //     console.error('Error:', errorText);
            //     throw new Error('Network response was not ok');
            // }

            console.log("resData: updateuserDetails===>", resData)

            dispatch({ type: USER_DETAILS, resData })

            return Promise.resolve(resData);

        } catch (err) {
            console.error("You have error in updateuserDetails", err);
            return Promise.reject(err);
        }
    }

}








// export const logOut = () =>{


//     return { type: LOGOUT}
      
// }