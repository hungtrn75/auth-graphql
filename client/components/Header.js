import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
    onLogout() {
        this.props.mutate({
            refetchQueries: [{ query }]
        }
        );
    }

    renderButtons() {
        let { loading, user } = this.props.data;
        if (loading) {
            return <div>Loading...</div>
        };
        if (user) {
            return (
                <li>
                    <a onClick={this.onLogout.bind(this)}>Logout</a>
                </li>
            )
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            )
        }
    }
    render() {
        console.log(this.props.data);
        return (
            <nav className="nav-wrapper">   
                    <Link to="/" className="left brand-logo">Home</Link>
                <ul className="right">
                    {this.renderButtons()}
                </ul>
            </nav>
        );
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);