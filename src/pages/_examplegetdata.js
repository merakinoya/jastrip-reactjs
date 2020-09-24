import React, { useState, useEffect } from 'react';
import firebaseFirestore from '../services/firebase';

function Products() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({ products: [] });

    firebaseFirestore.collection("produts").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/product")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) 
    {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) 
    {
      return <div>Loading...</div>;
    } 

    else 
    {
      return (
        <ul>
         {items.products.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }

export default Products;