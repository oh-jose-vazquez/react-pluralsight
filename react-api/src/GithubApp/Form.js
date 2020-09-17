import React, { Component } from 'react'

class Form extends Component {

    render() {
        return (
            <div className="input-group mb-3 d-flex justify-content-center">
                <input type="text" className="form-control col-4" placeholder="Username"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Add</button>
                </div>
            </div>
        )
    }
}

export default Form