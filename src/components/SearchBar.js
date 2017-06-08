import React from 'react';


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({
            place: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.getForecast(this.state.place);
        this.props.getCurrentWeather(this.state.place);
        this.setState({place: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group search-bar">
                <input type="text" placeholder="Enter Place Name..." className="form-control" onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search</button>
                </span>
            </form>
        )
    }
}