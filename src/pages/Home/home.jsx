import React, { useEffect } from 'react';
// import ProductList from '../../components/products/ProductList';
// import FeaturedProducts from './components/FeaturedProducts';
// import Banner from './components/Banner';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { fetchProductsThunk } from '../../services/features/products/productsThunk';
import ProductList from '../../components/products/ProductList';
import { Navigate } from 'react-router-dom';
import DealOfTheDay from './components/DealOfTheDay';
import { clearProductDetails } from '../../services/features/products/productSpecificSlice';
import MainSection from './components/MainSection';

const Home = () => {
  
  
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const products = useSelector((state) => state.products.items);
  

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    const product = products.filter((product) => product.productId === productId);
    if(!product) return;
    navigate(`/product/${productId}`);

  };
  

  return (
    <div className="home">
       <MainSection />
       <DealOfTheDay /> 
       {/* <FeaturedProducts /> */}
       <br /><br />
      <h2>All Products</h2>
      <ProductList products={products} onProductClick={handleProductClick} />
    </div>
  );
};

export default Home;
