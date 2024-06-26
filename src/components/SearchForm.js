import React from 'react'

class SearchForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { search: '', searchBy: '', year: 1900 }
		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange = (event) => {
		const target = event.target
		const inputName = target.name
		const value = target.value
		this.setState(
			{
				[inputName]: value,
			},
			() => {
				this.props.onChange(
					this.state.search,
					this.state.searchBy,
					this.state.year
				)
			}
		)
	}

	componentDidMount() {
		this.setState(
			{
				searchBy: 'title',
			},
			() => {
				console.log(this.state.searchBy)
			}
		)
	}

	render() {
		return (
			<div className='form-group'>
				<div className='row mx-auto my-3'>
					<input
						type='text'
						name='search'
						id='search'
						placeholder='Search'
						value={this.state.search}
						className='form-control col'
						onChange={this.onInputChange}
					/>
					<br />
				</div>
				<div className='row mx-auto my-3'>
					<div className='col row' style={{ lineHeight: '2.5' }}>
						<div
							className='form-check col-1 px-0'
							style={{ display: 'table-cell', verticalAlign: 'middle' }}>
							<input
								type='radio'
								name='searchBy'
								id='title'
								value='title'
								checked={this.state.searchBy === 'title'}
								onChange={this.onInputChange}
							/>
							<label htmlFor='title'>Title</label>
						</div>
						<div className='form-check col-1 px-0'>
							<input
								type='radio'
								name='searchBy'
								id='author'
								value='author'
								checked={this.state.searchBy === 'author'}
								onChange={this.onInputChange}
							/>
							<label htmlFor='author'>Author</label>
						</div>
						<div className='form-check col-1 px-0'>
							<input
								type='radio'
								name='searchBy'
								id='publisher'
								value='publisher'
								checked={this.state.searchBy === 'publisher'}
								onChange={this.onInputChange}
							/>
							<label htmlFor='publisher'>Publisher</label>
						</div>
						<div className='form-check col px-0'>
							<div className='col' style={{ display: 'inline-block' }}>
								<input
									type='radio'
									name='searchBy'
									id='titleYear'
									value='year'
									checked={this.state.searchBy === 'year'}
									onChange={this.onInputChange}
								/>
								<label htmlFor='titleYear'>Title and Year = </label>
							</div>
							<div className='col' style={{ display: 'inline-block' }}>
								<input
									type='number'
									name='year'
									id='year'
									minLength={4}
									min={1900}
									max={2100}
									value={this.state.year}
									className='form-control'
									onChange={this.onInputChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchForm
