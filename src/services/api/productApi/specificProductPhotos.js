import axios from 'axios';
import api from './api';



export const specificProductPhotos = async (productId) =>{    
    
    const response = await api.get(`/specificProductPhotos/${productId}`);
        
     
    if(response.data.length === 0){
        return "";
    }else{        
        
        return response.data;
    }
    
}