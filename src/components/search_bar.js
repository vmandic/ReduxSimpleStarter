import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ this.handleInputChange } />
      </div>
    );
  }
}

export default SearchBar;