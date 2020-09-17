import React, { Component } from 'react'

class Card extends Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <div className="card mb-3 col-4">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.imageUrl} className="card-img" alt={this.props.name}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">
                                <small className="text-muted">{this.props.company}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card