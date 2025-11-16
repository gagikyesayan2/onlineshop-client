import React, { useEffect, useState } from "react";
import './componentStyles/productPhotos.css';

const ProductPhotos = ({productVariant, mainPhoto, photos, selectedVariant })=>{
    const productPhotos = photos; // left side photos
    
    let selectedProductimageUrl;
    let selectedProductColor;
    
   
     if(productVariant){

        selectedProductColor = productVariant.color;
        selectedProductimageUrl = productVariant.image_url;
        if(selectedProductimageUrl){
            mainPhoto = selectedProductimageUrl;
        }
     }
    
     let [leftSidePhotoUrl, setLeftSidePhotoUrl] = useState();
     
     useEffect(() => {
        setLeftSidePhotoUrl(mainPhoto);
        console.log(leftSidePhotoUrl);
        
      }, [mainPhoto]);

const photoUrl = `https://onlineshop-api-b7h9cfe2excmgebs.uaenorth-01.azurewebsites.net/product-images`;
    return(
        <div className="col">
            <div className="main-photo">
                <img src={`${photoUrl}/${leftSidePhotoUrl}`}
                alt=""
                />
            </div>
            <div className="other-photos">
                {
                    productPhotos.map((photo) =>{
                        return <img onClick={() =>{
                            
                            setLeftSidePhotoUrl(photo.image_url)
                        }} key={photo.id} src={`${photoUrl}/${photo.image_url}`} alt="" />
                    })
                }
            </div>
        </div>
    )
}

export default ProductPhotos;
