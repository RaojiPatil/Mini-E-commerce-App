import React from "react";
import { useEffect, useState } from "react";
import "./product.css"


const Product = () => {

  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.data)
        console.log(data.data)
      })
  
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
  <main>
      <h1>Product-List</h1>
      <div className="productlist">
        {users && users.length > 0 && users.map((userObj, index) => (
            <div className="product" key={userObj.id}>
              <h2>Brand: {userObj.brand } </h2>
              <h3>Title: {userObj.title}</h3>
              {<img src={`${userObj.image}`} width="200" height="100" />}
              <p>Category: { userObj.category}</p>
              <p>Price:{userObj.price}</p>
              <button className="btn">Add To Card</button>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Product