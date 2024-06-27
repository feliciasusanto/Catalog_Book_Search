function SideNav() {
	let path = window.location.href.split('/')
	path = `/${path[path.length - 1]}`
	let pubURL = `${process.env.PUBLIC_URL}/#`
	return (
		<div
			className='d-flex flex-nowrap'
			style={{
				maxHeight: '100vh',
				minHeight: '100vh',
				overflowX: 'auto',
				overflowY: 'hidden',
				position: 'sticky',
				top: '0',
			}}>
			<div
				className='d-flex flex-column flex-shrink-0'
				style={{ width: '4.5rem', background: '#e9f5f9' }}>
				<ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
					<li className='nav-item'>
						<a
							href={pubURL + '/'}
							className={
								path === '/'
									? 'nav-link py-3 border-bottom active'
									: 'nav-link py-3 border-bottom'
							}
							aria-current='page'
							title='Home - Books List - Search'
							data-bs-toggle='tooltip'
							data-bs-placement='right'
							data-bs-original-title='Home'>
							<svg
								className='bi'
								viewBox='0 0 512 512'
								width='40'
								height='40'
								xmlns='http://www.w3.org/2000/svg'
								fill='#000000'
								stroke='#000000'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										fill={path === '/' ? '#ffffff' : '#165a72'}
										d='M169 57v430h78V57h-78zM25 105v190h46V105H25zm158 23h18v320h-18V128zm128.725 7.69l-45.276 8.124 61.825 344.497 45.276-8.124-61.825-344.497zM89 153v270h62V153H89zm281.502 28.68l-27.594 11.773 5.494 12.877 27.594-11.773-5.494-12.877zm12.56 29.433l-27.597 11.772 5.494 12.877 27.593-11.772-5.492-12.877zm12.555 29.434l-27.594 11.77 99.674 233.628 27.594-11.773-99.673-233.625zM25 313v30h46v-30H25zm190 7h18v128h-18V320zM25 361v126h46V361H25zm64 80v46h62v-46H89z'></path>
								</g>
							</svg>
						</a>
					</li>
					<li className='nav-item'>
						<a
							href={pubURL + '/bookmark'}
							className={
								path === '/bookmark'
									? 'nav-link py-3 border-bottom active'
									: 'nav-link py-3 border-bottom'
							}
							aria-current='page'
							title='Bookmarked Books'
							data-bs-toggle='tooltip'
							data-bs-placement='right'
							data-bs-original-title='Home'>
							<svg
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									strokeLinecap='round'
									strokeLinejoin='round'></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<path
										fillRule={path === '/bookmark' ? 'oddeven' : 'evenodd'}
										clipRule={path === '/bookmark' ? 'oddeven' : 'evenodd'}
										d='M19 1H8.99C7.89 1 7 1.9 7 3H17C18.1 3 19 3.9 19 5V18L21 19V3C21 1.9 20.1 1 19 1ZM15 7V19.97L10 17.82L5 19.97V7H15ZM5 5H15C16.1 5 17 5.9 17 7V23L10 20L3 23V7C3 5.9 3.9 5 5 5Z'
										fill={path === '/bookmark' ? '#ffffff' : '#165a72'}></path>
								</g>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SideNav
