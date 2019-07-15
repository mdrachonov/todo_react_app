import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        input: ''
    };

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text" className="form-control"
                    onChange={this.onInputChange}
                    placeholder="Write new purpose"
                    value={this.state.input}
                />
                <button className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}
