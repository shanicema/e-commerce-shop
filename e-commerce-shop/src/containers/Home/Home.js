import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

const Home = () => {
    return (
        <div>
            <ProductCarousel/>
            <ProductGallery/>
        </div>
    );
};

export default Home;