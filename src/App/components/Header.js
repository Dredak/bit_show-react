import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top"
                            alt="" />
                        BIT SHOW
                    </a>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </header>
        )
    }
}

export default Header;