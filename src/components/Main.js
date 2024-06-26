import React from 'react'
import SearchForm from './SearchForm.js'
import Cards from './Cards.js'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			searchBy: '',
			year: 1900,
			searchResult: null,
			booksMaster: [
				{
					title: 'Classical Mythology',
					author: 'Mark P. O. Morford',
					publisher: 'Oxford University Press',
					year: 2022,
					popular: false,
					bookmark: false,
				},
				{
					title: 'Rules of The Wild',
					author: 'Francesca Marciano',
					publisher: 'Random House Inc',
					year: 1998,
					popular: true,
					bookmark: false,
				},
				{
					title: 'Clara Callan',
					author: 'Richard Bruce Wright',
					publisher: 'Harper Flamingo Canada',
					year: 2001,
					popular: false,
					bookmark: false,
				},
				{
					title: 'Wild Animus',
					author: 'Rich Shapero',
					publisher: 'Too Far',
					year: 2004,
					popular: true,
					bookmark: false,
				},
				{
					title: 'Tage der Unschuld',
					author: 'Richard North Patterson',
					publisher: 'Goldmann',
					year: 2000,
					popular: false,
					bookmark: false,
				},
				{
					title: 'The Hellfire Club',
					author: 'Peter Straub',
					publisher: 'Random House Inc',
					year: 1996,
					popular: false,
					bookmark: false,
				},
				{
					title: 'The Night Listener',
					author: 'Armistead Maupin',
					publisher: 'Harper Colins Publishers',
					year: 2000,
					popular: true,
					bookmark: false,
				},
				{
					title: 'Night Tales',
					author: 'Nora Roberts',
					publisher: 'Silhouette',
					year: 2000,
					popular: false,
					bookmark: false,
				},
			],
			popularBooks: [],
			bookmark: false,
		}

		this.onChange = this.onChange.bind(this)
	}

	getPopularBooks = () => {
		let popBooks = this.state.booksMaster.filter(
			(book) => book.popular === true
		)
		// sort by title
		popBooks.sort((a, b) => {
			const titleA = a.title.toUpperCase() // ignore upper and lowercase
			const titleB = b.title.toUpperCase() // ignore upper and lowercase
			if (titleA < titleB) {
				return -1
			}
			if (titleA > titleB) {
				return 1
			}

			// names must be equal
			return 0
		})

		this.setState({
			popularBooks: popBooks,
		})
	}

	bookmarkBook = (bookmarkBook) => {
		// change bookmark value in master
		let findBookIndex = this.state.booksMaster.findIndex(
			(book) => book.title.toLowerCase() === bookmarkBook.title.toLowerCase()
		)
		let booksMasterList = [...this.state.booksMaster]
		booksMasterList[findBookIndex] = bookmarkBook
		this.setState(
			{
				booksMaster: booksMasterList,
			},
			() => {
				// update list of popular books with new bookmark
				this.getPopularBooks()
			}
		)
	}

	onChange = (search, searchBy, year) => {
		this.setState(
			{
				search: search,
				searchBy: searchBy,
				year: year,
			},
			() => {
				this.setState(
					{
						// clear search result
						searchResult: null,
					},
					() => {
						if (this.state.search !== '') {
							// search by title
							if (this.state.searchBy === 'title') {
								this.setState({
									searchResult: this.state.booksMaster.filter(
										(book) =>
											book.title
												.toLowerCase()
												.includes(this.state.search.toLowerCase()) === true
									),
								})
								// search by author
							} else if (this.state.searchBy === 'author') {
								this.setState({
									searchResult: this.state.booksMaster.filter(
										(book) =>
											book.author
												.toLowerCase()
												.includes(this.state.search.toLowerCase()) === true
									),
								})
								// search by publisher
							} else if (this.state.searchBy === 'publisher') {
								this.setState({
									searchResult: this.state.booksMaster.filter(
										(book) =>
											book.publisher
												.toLowerCase()
												.includes(this.state.search.toLowerCase()) === true
									),
								})
							}
							// search by title and year
						} else if (this.state.searchBy === 'year') {
							this.setState({
								searchResult: this.state.booksMaster.filter(
									(book) =>
										book.title
											.toLowerCase()
											.includes(this.state.search.toLowerCase()) === true &&
										String(book.year).includes(this.state.year)
								),
							})
						} else {
							// search by year (search bar empty)
							if (this.state.searchBy === 'year') {
								this.setState({
									searchResult: this.state.booksMaster.filter((book) =>
										String(book.year).includes(this.state.year)
									),
								})
							}
						}
					}
				)
			}
		)
	}

	componentDidMount() {
		this.getPopularBooks()
		this.setState({
			searchBy: 'title',
			searchResult: [],
		})
	}

	render() {
		return (
			<main className='container '>
				<SearchForm onChange={this.onChange} />
				{this.state.search !== '' ||
				(this.state.search === '' && this.state.searchBy === 'year') ? (
					<>
						<div className='books-list'>
							<div className='row my-3'>
								<h1 className='h3'>Search</h1>
								<hr></hr>
							</div>
							<div className='row'>
								<Cards
									books={this.state.searchResult}
									bookmarkBook={this.bookmarkBook}
								/>
							</div>
						</div>
					</>
				) : (
					<>
						<div className='books-list'>
							<div className='row my-3'>
								<h1 className='h3'>Popular</h1>
								<hr></hr>
							</div>
							<div className='row'>
								<Cards
									books={this.state.popularBooks}
									bookmarkBook={this.bookmarkBook}
								/>
							</div>
						</div>
						<div className='books-list'>
							<div className='row my-3'>
								<h1 className='h3'>Our Books</h1>
								<hr></hr>
							</div>
							<div className='row'>
								<Cards
									books={this.state.booksMaster}
									bookmarkBook={this.bookmarkBook}
								/>
							</div>
						</div>
					</>
				)}
			</main>
		)
	}
}

export default Main
