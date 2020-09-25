import React, { Component, useState } from 'react';
import firebaseServices from '../services/firebase';
import { Alert } from 'react-bootstrap';

export default class ProductCreate extends Component {

    constructor(props) {
        super(props);

        this.firebaseFirestore = firebaseServices.firestore().collection("products");

        this.state = {
            name: '',
            description: '',

            message: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const state = this.state

        state[event.target.name] = event.target.value;

        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, description } = this.state;

        this.firebaseFirestore.add({
            name,
            description
        })
            .then(function (docRef) {
                this.setState({
                    name: '',
                    description: ''
                });

                this.props.history.push('/')

                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {

                console.log("Error Message: ", error);
            });


        const message = [];

        this.setState({
            name: '',
            description: '',
            message
        });


        this.props.history.push('/create');

    }


    render() {
        const { name, description, message } = this.state;

        return (
            <div className="mt-5 container">

                {message ? <AlertDismissible /> : ''}

                <form onSubmit={this.handleSubmit}>

                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} className="form-control" />

                    <label className="mt-4">Desc: </label>
                    <input type="text" name="description" value={description} onChange={this.handleChange} className="form-control" />

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}





function AlertDismissible() {
    const [show, setShow] = useState(true);
    
    return (
        <>

            <Alert show={show} variant="info" onClose={() => setShow(false)} dismissible>
                Data Berhasil Tersimpan{' '}
                <Alert.Link href="/products">di product list</Alert.Link>. Give it a click if you want see.

            </Alert>

            {/*    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}   */}
        </>
    );
}