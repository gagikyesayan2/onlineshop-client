import axios from 'axios';
import api from './api';


export const productSpecificDetails = async (productId) =>{    
    
    const response = await api.get(`/selectedProductWithDetails/${productId}`);
    
    if(response.data.length === 0){
        return "";
    }else{        
        return response.data;
    }
    
}