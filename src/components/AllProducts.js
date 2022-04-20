import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

import "../css/allproduct.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function AllProducts() {
  const [productList, setproductList] = useState([])
  const [category , setCategory]=useState([])
 const [cat, setCat]=useState("")
  const [sort, setsort] = useState("desc");
  const [searchData, setSearchData] = useState("");


  useEffect(() => {
intialData()

allCategory()
  }, [sort]);

  const intialData=async()=> {
    const products= await axios.get(`https://fakestoreapi.com/products?sort=${sort}` )
    setproductList(products.data)
    console.log(products.data)
    return products.data;
  }


  const newCat=async()=>{
    const categoryProducts= await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
    console.log(categoryProducts.data)
    setproductList(categoryProducts.data)
    
  }
  const allCategory=async()=>{
    const  data=await axios.get(`https://fakestoreapi.com/products/categories`)
    console.log(data.data)
   
    setCategory(data.data)
  }

  return (
    <div>
      <input
      className="searchbar"
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchData(event.target.value)}
      />{" "}


      <select
        name="category"
        id="category"
        onClick={newCat}
        onChange={(event) => setCat(event.target.value)}
      >
       {category.map((ele)=>(<option value={ele}>{ele}</option>))}
        
        
      </select>


      
      <select
        name="sort"
        id="sort"
        onChange={(event) => setsort(event.target.value)}
      >
        <option value="desc">Des</option>
        <option value="asc">Asc</option>
      </select>
      <Container>
        <Row>
          {productList.length > 0
            ? productList
                .filter((ele) => {
                  if (searchData === "") {
                    return ele;
                  } else if (
                    ele.title.toLowerCase().includes(searchData.toLowerCase())||
                    ele.description.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                    return ele;
                  }
                })
                .map((ele) => (
                  <Col>
                    <SingleProduct
                      image={ele.image}
                      price={ele.price}
                      id={ele.id}
                      title={ele.title}
                      description={ele.description}
                    />
                  </Col>
                ))
            : ""}
        </Row>
      </Container>
    </div>
  );
}

export default AllProducts;
