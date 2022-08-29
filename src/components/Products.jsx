import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Table = styled.table`
margin: auto;
margin-top: 20px;
border-collapse: collapse;
& td, & th{
    border: .1px solid #fe8019;
    letter-spacing: .5px;
    padding: 10px;
    
}
& td{
    font-weight:600;
}
`



const Products = () => {
    // const {Id} = useParams();
    const [productDetails, setProductDetails]=React.useState([]);


    const getData = async () => {
        try {
            
            let response = await fetch(`http://localhost:8080/products`);
            let result = await response.json();
             console.log(result)
            
            setProductDetails(result)
        } catch (error) {
            console.log(error);
        }
    }
  
   React.useEffect(()=>{
    getData();
   },[])

   
    return(
      <Table>
        <thead>
        <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>More Details</th>
                </tr>
        </thead>

        <tbody>
                {
                    productDetails?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td><Link to={`/products/${item.id}`}>MORE</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </Table>
    )
}
    


export default Products
