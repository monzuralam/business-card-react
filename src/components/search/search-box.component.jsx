import { Component } from "react";

class Search extends Component {
  render() {
    const { onChangeHandler, placeholder } = this.props;
    return (
      <div className="container mx-auto py-6">
        <input
          type="search"
          name="search"
          className="search-box border px-4 py-3"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default Search;
