const Search = ({bgSearch}: any) => {
    return (
        <section className={`ftco-section ftco-no-pb ftco-no-pt ${bgSearch ? 'search-bg' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-wrap-1 ftco-animate p-4">
                            <form action="#" className="search-property-1">
                                <div className="row">
                                    <div className="col-lg align-items-end">
                                        <div className="form-group">
                                            <div style={{textAlign:'left', color:'white'}}>Keyword</div>
                                            <div className="form-field">
                                                <div className="icon"><span className="fa fa-search"/></div>
                                                <input type="text" className="form-control"
                                                       placeholder="Enter Keyword"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg align-items-end">
                                        <div className="form-group">
                                            <div style={{textAlign:'left', color:'white'}}>Property Type</div>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="fa fa-chevron-down"/>
                                                    </div>
                                                    <select className="form-control">
                                                        <option value={''}>Residence</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg align-items-end">
                                        <div className="form-group">
                                            <div style={{textAlign:'left', color:'white'}}>Location</div>
                                            <div className="form-field">
                                                <div className="icon"><span className="fa fa-search"/></div>
                                                <input type="text" className="form-control" placeholder="Location"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg align-items-end">
                                        <div className="form-group">
                                            <div style={{textAlign:'left', color:'white'}}>Price Limit</div>
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon"><span className="fa fa-chevron-down"/>
                                                    </div>
                                                    <select className="form-control">
                                                        <option value={''}>$5,000</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg align-self-end">
                                        <div className="form-group">
                                            <div className="form-field">
                                                <input type="submit" defaultValue="Search"
                                                       className="form-control btn btn-primary"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Search;
