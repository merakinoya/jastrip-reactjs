import React, { Component } from 'react';
import firebaseServices from '../services/firebase';

class Products extends Component {

    constructor(props) {
        super(props);

        this.unsubscribe = null;

        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };

    }


    componentDidMount() {

        firebaseServices.firestore().collection("products").get().then((querySnapshot) => {

            const products = [];

            querySnapshot.forEach((doc) => {

                const { name, description } = doc.data();

                products.push({
                    key: doc.id,
                    doc, // DocumentSnapshot
                    name,
                    description,
                });

                console.log(`${doc.id} => ${doc.data()}`);
            });

            this.setState({
                products
            });

        });

    }


    render() {
        const { error, isLoaded, products, message } = this.state;

        if (error) {
            return (<div>Error: {error.message}</div>)
        }
        else if (isLoaded) {
            return (<div>Loading...</div>)
        }
        else {

            return (
                <div className="mt-5 container">
                     {message}

                    <a className="btn btn-primary mb-4" href="/create">Create a Products</a>
                    {
                        products.map(products => (
                            <div key={products.key}>
                                <div>{products.name}</div>
                                <div>{products.description}</div>
                                <hr></hr>
                            </div>
                        ))
                    }
                </div>
            );

        }
    }
}


export default Products;