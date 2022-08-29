import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// 

const Div = styled.div`
padding:20px;
& h4, & h3{
    margin:10px;
}
`;

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = React.useState([]);
    

    const getData = async () => {
        try {
            
            let response = await fetch(`http://localhost:8080/products/${productId}`);
            let result = await response.json();
            
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData().then((res) => {
            setProductDetails(res);
            
        })
    }, []);

    return (
        
            <Div>
            <h4>ID : {productDetails.id}</h4>
            <h4>Price : $ {productDetails.price}</h4>
            <h3>{productDetails.name}</h3>
        </Div>
        )
    
}

export default ProductDetails;
