import { Outlet } from 'react-router-dom'

function Header() {
	return (
		<div>
			<header className='container'>
				<div className='row mx-auto my-4'>
					<img
						src='https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg'
						alt='catalog logo'
						className='col-2'
					/>
				</div>
			</header>
			<Outlet />
		</div>
	)
}

export default Header
