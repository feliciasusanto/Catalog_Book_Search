import React from 'react'

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = { book: this.props.book, bookmark: false, bookmarkBook: null }
		this.onClickBookmark = this.onClickBookmark.bind(this)
	}

	onClickBookmark = () => {
		let beforeBookmark = this.state.bookmark
		this.setState(
			{
				bookmark: !beforeBookmark,
			},
			() => {
				this.setState(
					{
						bookmarkBook: null,
					},
					() => {
						this.setState(
							(prevState) => ({
								bookmarkBook: {
									...prevState.book,
									bookmark: this.state.bookmark,
								},
							}),
							() => {
								this.props.bookmarkBook(this.state.bookmarkBook)
								this.setState({
									book: this.state.bookmarkBook,
								})
							}
						)
					}
				)
			}
		)
	}

	componentDidMount() {
		this.setState({
			bookmark: this.props.book.bookmark,
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.book !== this.props.book) {
			this.setState({
				book: this.props.book,
			})
		}
	}

	render() {
		let path = window.location.href.split('/')
		path = `/${path[path.length - 1]}`
		return (
			<>
				<div className='card m-2 col-4 p-0' style={{ width: '32%' }}>
					<div className='text-center'>
						<p className='h5 mt-3'>{this.state.book.title}</p>
						<p>{this.state.book.author}</p>
						<p>
							{this.state.book.publisher} {this.state.book.year}
						</p>
					</div>
					{path === '/' ? (
						<div
							className='bookmark text-end m-0 px-2'
							style={{ background: 'lightgrey' }}>
							{this.state.book.bookmark === false ? (
								<img
									src='https://img.icons8.com/?size=100&id=KY8KFlMXWpIG&format=png&color=000000'
									alt='bookmark'
									onClick={this.onClickBookmark}
									style={{ width: '10%' }}
								/>
							) : (
								<img
									src='https://img.icons8.com/?size=100&id=sbP8MaAzMcPh&format=png&color=000000'
									alt='bookmark'
									onClick={this.onClickBookmark}
									style={{ width: '10%' }}
								/>
							)}
						</div>
					) : (
						<></>
					)}
				</div>
			</>
		)
	}
}

export default Card
