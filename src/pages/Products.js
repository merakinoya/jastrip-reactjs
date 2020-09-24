import React, { Component } from 'react';
import firebaseFirestore from '../services/firebase';

class Products extends Component {

    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
          products: []
        };
      }


      onCollectionUpdate = (firebaseFirestore) => 
      {
        const products = [];

        firebaseFirestore.collection("products").get().then((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
    
                const { title, description, author } = doc.data();
    
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });

      };

render() {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name of Product"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Desc of product"
                />
                <button type="submit">Save Data</button>
            </form>
        </div>
    );
}
}


export default Products;