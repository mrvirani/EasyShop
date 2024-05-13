


export const sendCardDetails = (cardNumber, name, cvv, expiry) => {

    return async dispatch => {

        const bearerToken = await AsyncStorage.getItem('userToken');

        const body = {
            card_num: cardNumber,
            holder_name: name,
            cvv: cvv,
            expiry: expiry
        }

        try {
            const resData = await apiRequest('/userprofile/cards', 'POST', token, body);
            dispatch({ type: 'SEND_CARD_DETAILS', resData });
            return resData;
        } catch (error) {
            console.error('Error in sendCardDetails:', error);
            throw error;
        }




    }
}






























