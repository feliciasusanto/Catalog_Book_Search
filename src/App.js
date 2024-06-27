import Header from './components/header.js'
import SideNav from './components/Sidenav.js'
import Main from './components/Main.js'
import Bookmark from './components/Bookmark.js'

function App() {
	let path = window.location.href.split('/')
	path = `/${path[path.length - 1]}`
	return (
		<>
			<div className='App d-flex'>
				<SideNav />
				<div style={{ width: '100%' }}>
					<Header />
					{path === '/' ? <Main /> : <Bookmark />}
				</div>
			</div>
		</>
	)
}

export default App
