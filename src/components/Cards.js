import React from 'react'
import Card from './Card.js'

class Cards extends React.Component {
	constructor(props) {
		super(props)
		this.state = { books: [] }
		this.bookmarkBook = this.bookmarkBook.bind(this)
	}

	bookmarkBook = (bookmarkBook) => {
		this.props.bookmarkBook(bookmarkBook)
	}

	componentDidMount() {
		this.setState({
			books: this.props.books,
		})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.books !== this.props.books) {
			this.setState({
				books: this.props.books,
			})
		}
	}

	bookCards = (books) => {
		if (books !== null) {
			return books.map((book) => {
				return (
					<Card book={book} key={book.title} bookmarkBook={this.bookmarkBook} />
				)
			})
		} else return <></>
	}

	render() {
		return <div className='row'>{this.bookCards(this.state.books)}</div>
	}
}

export default Cards
