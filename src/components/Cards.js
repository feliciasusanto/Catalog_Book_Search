import React from 'react'
import Card from './Card.js'

class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {books: this.props.books}
    }

    bookCards = (books) => {
        return books.map((book) => {
            return <Card book = {book} />
        })
    }

    render() {
        return (
            <div className='row'>
                {this.bookCards(this.state.books)}
            </div>
            
        )
    }
}

export default Cards