import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Book:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type a book to begin"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;