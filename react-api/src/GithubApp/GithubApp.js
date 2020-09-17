import React, { Component } from 'react'
import Form from './Form.js'
import CardList from './CardList.js'

const testData = [
    {
        name: "name1",
        company: "company1",
        imageUrl: "https://avatars1.githubusercontent.com/u/55112875?v=4"
    },
    {
        name: "name2",
        company: "company2",
        imageUrl: "https://avatars1.githubusercontent.com/u/55112875?v=4"
    },
    {
        name: "name3",
        company: "company3",
        imageUrl: "https://avatars1.githubusercontent.com/u/55112875?v=4"
    },
];

class GithubApp extends Component {

    state = {
        profiles: testData
    };

    addNewProfile = (profileData) => { console.log(profileData) };

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