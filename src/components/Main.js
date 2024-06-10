function Main() {
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
            </div>
        </main>
    )
}

export default Main;