function SearchMedication() {
    const searchResults = null;
    return (
        <div className="bg-main rounded col-lg-5 ml-lg-2 mt-3 mt-lg-0">
            <h2 className="d-flex">Search For a Medication</h2>
            <div className="row px-3">
                <div className="mr-2">
                    <label htmlFor="brandName" className="d-block">Brand Name
                        <input id="brandName" className="d-block"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="genericName" className="d-block">Generic Name
                        <input id="genericName" className="d-block"/>
                    </label>
                </div>
            </div>
            <button className="btn d-block bg-white mb-2">SEARCH MEDICATION</button>
            {searchResults ? <div>
                <h4>Search Results</h4>
            </div> : null}
        </div>
    )
}

export default SearchMedication;