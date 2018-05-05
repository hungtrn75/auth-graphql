import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} required/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} required/>
                    </div>
                    <div className="errors">
                        {this.props.errors.map(e => <div key={e}>{e}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;