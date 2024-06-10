import React from 'react'
import Cards from './Cards.js'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.booksMaster = [
            {
                "title": "Classical Mythology",
                "author": "Mark P. O. Morford",
                "publisher": "Oxford University Press",
                "year": 2022
            },
            {
                "title": "Rules of The Wild",
                "author": "Francesca Marciano",
                "publisher": "Random House Inc",
                "year": 1998
            },
            {
                "title": "Clara Callan",
                "author": "Richard Bruce Wright",
                "publisher": "Harper Flamingo Canada",
                "year": 2001
            },
            {
                "title": "Wild Animus",
                "author": "Rich Shapero",
                "publisher": "Too Far",
                "year": 2004
            },
            {
                "title": "Tage der Unschuld",
                "author": "Richard North Patterson",
                "publisher": "Goldmann",
                "year": 2000
            },
            {
                "title": "The Hellfire Club",
                "author": "Peter Straub",
                "publisher": "Random House Inc",
                "year": 1996
            },
            {
                "title": "The Night Listener",
                "author": "Armistead Maupin",
                "publisher": "Harper Colins Publishers",
                "year": 2000
            },
            {
                "title": "Night Tales",
                "author": "Nora Roberts",
                "publisher": "Silhouette",
                "year": 2000
            }]
        }
        
        render() {
            return (
                <main className="container ">
                    <div className="form-group">
                        <div className="row mx-auto my-3">
                            <input type="text" name="search" id="search" placeholder="Search" className="form-control col"/><br/>
                        </div>
                        <div className="row mx-auto my-3">
                            <div className="col row" style={{lineHeight: '2.5'}}>
                                <div className="form-check col-1 px-0" style={{display: 'table-cell',verticalAlign: 'middle'}}>
                                    <input type="radio" name="searchBy" id="title" /> <label htmlFor="title">Title</label>
                                </div>
                                <div className="form-check col-1 px-0">
                                    <input type="radio" name="searchBy" id="author" /> <label htmlFor="author">Author</label>
                                </div>
                                <div className="form-check col-1 px-0">
                                    <input type="radio" name="searchBy" id="publisher"/> <label htmlFor="publisher">Publisher</label>
                                </div>
                                <div className="form-check col px-0">
                                    <div className="col" style={{display: 'inline-block'}}>
                                        <input type="radio" name="searchBy" id="titleYear"/> <label htmlFor="titleYear">Title and Year = </label>        
                                    </div>
                                    <div className="col" style={{display:'inline-block'}}>
                                        <input type="text" name="year" id="year" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <h1 className='h3'>Our Books</h1>
                            <hr></hr>
                        </div>

                        <div className="row">
                            <Cards books = {this.booksMaster} />

                        </div>
                    </div>
                </main>
            )

    }
}

export default Main;