import React, { useEffect, useState} from "react";
import './componentStyles/dealofday.css';
import AddToCartButton from "../../Cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
import { fetchSpecificProductPhotosThunk } from "../../../services/features/products/productsThunk";

const DealOfTheDay = () =>{

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  useEffect(() =>{

      dispatch(fetchSpecificProductPhotosThunk(8))
  },[dispatch])
    const dealDayImageUrl = "https://onlineshop-api-b7h9cfe2excmgebs.uaenorth-01.azurewebsites.net/product-images/";
  
   
    const currentState = useSelector((state) =>state);
    const allProducts = currentState.products.items;
    const dealDayProduct = currentState.productSpecificData.items[0];

    const dealDayProductArray = allProducts.filter((product) => product.isDealOfTheDay === true);
    const [dealDayProductObject] = dealDayProductArray;
    
    const [imageUrl, handleImageChange] = useState(dealDayProductObject ? dealDayProductObject.image_url : "");

    if(!allProducts || dealDayProductArray.length === 0){
         return <div>
             soon!
         </div>
    }
    
  
    

    
    const handleClikDealDay = () =>{
        navigate(`/product/${dealDayProductObject.productId}`);

    }
   
   
    return(
        <div className="dealDayWrapper">
        <div className="dealDay">
            <div className="rowDealDay">
                <div className="col">
                    <div className="dealDayTextDetails">
                    <h3>{dealDayProductObject.name}</h3>
                     <p>Time Left</p>
                    </div>
                    <div className="dealDayTimeLeft">
                      <div>00</div>
                      <div>02</div>
                      <div>21</div>
                    </div>
                   <div className="dealDayOnlyBtn">
                      Only {dealDayProductObject.price}$
                   </div>
                </div>
                <div className="col">
                     <img onClick={handleClikDealDay} className="deal-card" src={`${dealDayImageUrl}${!imageUrl ? dealDayProductObject.image_url : imageUrl}`} alt="" />
                      
                      {<AddToCartButton />}
                      <div className="anglePhotos">
                        <img onClick={() => handleImageChange(dealDayProductObject.image_url)} src={dealDayImageUrl+dealDayProductObject.image_url} alt="" />
                        {
                          dealDayProduct ? dealDayProduct.map((product) =>{
                             return <img onClick={() => handleImageChange(product.image_url)} src={dealDayImageUrl+product.image_url} alt="" />
                          })
                          : ""
                        }
                    
                      </div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}

export default DealOfTheDay;
