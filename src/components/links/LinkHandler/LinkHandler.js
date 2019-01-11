import React from 'react';

class LinkHandler extends React.Component {
    render() {
        return <div className="input-group mb-3">
            <input type="url" className="form-control" placeholder="Pass the url here "/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary">Save <span role="img" aria-label="card file box">🗃</span></button>
                </div>
        </div>
    }
}

export default LinkHandler;