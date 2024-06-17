import React from 'react'
import SearchForm from './SearchForm.js'
import Cards from './Cards.js'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = { search: '', searchBy: '', year: 1900 }
		this.booksMaster = [
			{
				title: 'Classical Mythology',
				author: 'Mark P. O. Morford',
				publisher: 'Oxford University Press',
				year: 2022,
				popular: false,
			},
			{
				title: 'Rules of The Wild',
				author: 'Francesca Marciano',
				publisher: 'Random House Inc',
				year: 1998,
				popular: true,
			},
			{
				title: 'Clara Callan',
				author: 'Richard Bruce Wright',
				publisher: 'Harper Flamingo Canada',
				year: 2001,
				popular: false,
			},
			{
				title: 'Wild Animus',
				author: 'Rich Shapero',
				publisher: 'Too Far',
				year: 2004,
				popular: true,
			},
			{
				title: 'Tage der Unschuld',
				author: 'Richard North Patterson',
				publisher: 'Goldmann',
				year: 2000,
				popular: false,
			},
			{
				title: 'The Hellfire Club',
				author: 'Peter Straub',
				publisher: 'Random House Inc',
				year: 1996,
				popular: false,
			},
			{
				title: 'The Night Listener',
				author: 'Armistead Maupin',
				publisher: 'Harper Colins Publishers',
				year: 2000,
				popular: true,
			},
			{
				title: 'Night Tales',
				author: 'Nora Roberts',
				publisher: 'Silhouette',
				year: 2000,
				popular: false,
			},
		]
		this.popularBooks = this.booksMaster.filter((book) => book.popular === true)
		// sort by title
		this.popularBooks.sort((a, b) => {
		  const titleA = a.title.toUpperCase(); // ignore upper and lowercase
		  const titleB = b.title.toUpperCase(); // ignore upper and lowercase
		  if (titleA < titleB) {
			return -1;
		  }
		  if (titleA > titleB) {
			return 1;
		  }
		
		  // names must be equal
		  return 0;
		});
		this.onChange = this.onChange.bind(this)
	}

	onChange = (search, searchBy, year) => {
		this.setState({
			search: search,
			searchBy: searchBy,
			year: year,
		})
	}

	componentDidMount() {
		this.setState({
			searchBy: 'title',
		})
	}

	render() {
		return (
			<main className='container '>
				<SearchForm onChange={this.onChange} />
				<div className='books-list'>
					<div className='row my-3'>
						<h1 className='h3'>Popular</h1>
						<hr></hr>
					</div>
					<div className='row'>
						<Cards books={this.popularBooks} />
					</div>
				</div>
				<div className='books-list'>
					<div className='row my-3'>
						<h1 className='h3'>Our Books</h1>
						<hr></hr>
					</div>
					<div className='row'>
						<Cards books={this.booksMaster} />
					</div>
				</div>
			</main>
		)
	}
}

export default Main
