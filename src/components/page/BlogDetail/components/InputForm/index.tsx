import React from 'react';

const InputForm = () => {
    return (
        <div className="sidebar-box">
            <form action="#" className="search-form">
                <div className="form-group">
                    <span className="icon fa fa-search"/>
                    <input type="text" className="form-control"
                           placeholder="Type a keyword and hit enter"/>
                </div>
            </form>
        </div>
    );
}

export default InputForm;
