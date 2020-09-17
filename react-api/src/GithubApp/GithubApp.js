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

    render() {
        return (
            <div className="container">
                <h1 className="text-center">GithubApp</h1>
                <Form />
                <hr />
                <CardList data={testData}/>
            </div>
        )
    }
}

export default GithubApp