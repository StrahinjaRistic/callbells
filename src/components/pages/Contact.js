import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    // constructor() {
    //   super();

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
    // this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    // }
    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = this.state;

        const config = {
            headers:
                { 'Content-Type': 'aplication/x-www-form-urlencoded' }
        }

        axios.post('/api/form', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        }, config).then((res) => {
            console.log('result: ', res);

        })
        .catch( (error) =>{
            console.log('error')
        });

    }
    
    render() {
        //if() return <Redirect to='/confirm' />

        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12 m12 l6 forma">
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <input onChange={this.handleChange} type="text" id="firstName" className="validate" value={this.state.firstName} />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <input onChange={this.handleChange} type="text" id="lastName" className="validate" value={this.state.lastName} />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <input onChange={this.handleChange} type="email" id="email" className="validate" value={this.state.email} />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="Wrong email form" data-success="right"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <textarea onChange={this.handleChange} id="message" className="materialize-textarea" data-length="120" value={this.state.message}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 m4 l4">
                                <button className="btn-large waves-effect waves-light" type="submit" name="action">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;