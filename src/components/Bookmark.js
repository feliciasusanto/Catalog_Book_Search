import { useEffect, useState } from 'react'
import Cards from './Cards.js'

function Bookmark() {
	const [bookmarksList, setBookmarksList] = useState([])

	useEffect(() => {
		let booksMaster = JSON.parse(localStorage.getItem('booksMaster'))
		let bookmarked = booksMaster.filter((book) => book.bookmark === true)
		setBookmarksList(bookmarked)
	}, [])

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
							<Cards books={bookmarksList} bookmarkBook={{}} />
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
