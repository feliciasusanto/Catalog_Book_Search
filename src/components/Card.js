import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {book: this.props.book}
    }

    render(){
        return(
            <div className='card text-center m-2 col-4' style={{width: '32%'}}>
                <p className='h5 mt-3'>{this.state.book.title}</p>
                <p>{this.state.book.author}</p>
                <p>{this.state.book.publisher} {this.state.book.year}</p>
            </div>
        )
    }
}

export default Card