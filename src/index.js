import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'

let booksMaster = [
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
]

if (
	localStorage.getItem('booksMaster') === null ||
	localStorage.getItem('booksMaster') === ''
) {
	localStorage.setItem('booksMaster', JSON.stringify(booksMaster))
}

const router = createHashRouter([
	{
		children: [
			{ path: '/', element: <App />, index: true },
			{ path: '/bookmark', element: <App /> },
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
