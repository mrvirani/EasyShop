



const apiRequest =  async (endpoint, method, token=null, body=null, isFormData= false) =>{


    const baseUrl = "https://easyshop-5pbk.onrender.com";
    const url = `${baseUrl}${endpoint}`;

    const headers = new Headers();

    const config = {
        method: method,
        headers: headers,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    if (!isFormData) {
        headers.append('Content-Type', 'application/json');
    }
    
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    
    if (body) {
        if (isFormData) {
            const formData = new FormData();
            Object.keys(body).forEach(key => formData.append(key, body[key]));
            config.body = formData;
        } else {
            config.body = JSON.stringify(body);
        }
    }


    try {
        const response = await fetch(url, config);
        const resData = await response.json();
        if (response.ok) {
            return resData;
        } else {
            throw new Error(resData.message || "Something went wrong");
        }
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }



}



























