import { useEffect, useState } from 'react'
import Cards from './Cards.js'

function Bookmark(props) {
	let booksMaster = JSON.parse(localStorage.getItem('booksMaster'))

	const [bookmarksList, setBookmarksList] = useState([])

	const getBookmarked = () => {
		let bookmarked = booksMaster.filter((book) => book.bookmark === true)
		setBookmarksList(bookmarked)
	}

	const bookmarkBook = (bookmarkBook) => {
		// change bookmark value in master
		let findBookIndex = booksMaster.findIndex(
			(book) => book.title.toLowerCase() === bookmarkBook.title.toLowerCase()
		)
		let newBooksMasterList = [...booksMaster]
		newBooksMasterList[findBookIndex] = bookmarkBook
		// update books master in local storage
		localStorage.setItem('booksMaster', JSON.stringify(newBooksMasterList))
		getBookmarked()
	}

	// component did mount => load bookmarked books
	// component did update => when remove a book from bookmark, then update state, then load bookmarked books again
	useEffect(() => {
		getBookmarked()
	}, [getBookmarked])

	return (
		<main className='container'>
			{bookmarksList.length > 0 ? (
				<>
					<div className='books-list'>
						<div className='row my-3'>
							<h1 className='h3'>Bookmarks</h1>
							<hr></hr>
						</div>
						<div className='row'>
							<Cards books={bookmarksList} bookmarkBook={bookmarkBook} />
						</div>
					</div>
				</>
			) : (
				<>
					<hr />
					<p className='h3'>No bookmarked book. Go and add one!</p>
					<a href='/' className='btn btn-outline-primary'>
						Click Me!
					</a>
				</>
			)}
		</main>
	)
}

export default Bookmark
