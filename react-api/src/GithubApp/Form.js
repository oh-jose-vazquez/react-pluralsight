import React, { Component } from 'react';
const axios = require('axios');

class Form extends Component {

    state = {
        userName: '',
        submitted: false,
    };

    handleSubmit = async (event) => {
        event.preventDefault(); //<---- Avoid page refreshing when submit the form
        console.log(this.state.userName);
        this.setState({
            submitted: true
        });
        if (this.state.userName !== '') {
            try {
                const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
                console.log(response);
                const profileData = {
                    name: response.data.name,
                    company: response.data.company,
                    imageUrl: response.data.avatar_url
                }
                this.props.onSubmit(profileData);
                this.setState({
                    userName: ''
                });
            } catch(error) {
                
            }
            
        }
    };

    handleOnChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <input type="text" placeholder="Username"
                        className={`form-control col-md-4 col-sm-8 ${this.state.submitted && this.state.userName === '' ? 'is-invalid' : ''}`}
                        value={this.state.userName}
                        onChange={this.handleOnChange} //Needs this since the value is controled by reatc (no autobinding)
                    ></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Add</button>
                    </div>

                </div>
            </form>
        )
    }
}

export default Form