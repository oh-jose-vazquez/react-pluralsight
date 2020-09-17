import React, { Component } from 'react'
import Form from './Form.js'
import CardList from './CardList.js'

class GithubApp extends Component {

    state = {
        profiles: []
    };

    addNewProfile = (profileData) => { 
        console.log(profileData);
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">GithubApp</h1>
                <Form onSubmit={this.addNewProfile} />
                <hr />
                <CardList data={this.state.profiles} />
            </div>
        )
    }
}

export default GithubApp