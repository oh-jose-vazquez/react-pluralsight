import React, { Component } from 'react'

class Form extends Component {

    userNameInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault(); //<---- Avoid page refreshing when submit the form
        console.log(this.userNameInput.current.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <input type="text" className="form-control col-4" placeholder="Username" ref={this.userNameInput} required></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Add</button>
                    </div>

                </div>
            </form>
        )
    }
}

export default Form