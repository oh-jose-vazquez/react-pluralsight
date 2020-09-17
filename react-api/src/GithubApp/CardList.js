import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        return (
            <div>
                {this.props.data.map((d, i) => <Card name={d.name} company={d.company} imageUrl={d.imageUrl} key={i}/>)}
            </div>
        )
    }

}

export default CardList