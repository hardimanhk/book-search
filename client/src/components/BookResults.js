import React from "react";

function BookResults(props) {
  console.info(props.results);
  let saveButton = false;
  if (props.saveBook) {
    saveButton = true;
  }
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <h2>{result.title}</h2>
          <p>Written By: {result.authors[0]}</p>
          <div>
          <img alt="Book" src={result.image} className="img-fluid" />
          <p>{result.description}</p>
          </div>
          {saveButton ? (
            <div>
              <a href={result.link} target="blank" alt={result.title}><button>View</button></a>
              <button className="save-btn" onClick={() => props.saveBook(result.title, result.authors, result.description, result.image, result.link)} tabIndex="0">Save</button>
            </div>
          ) : (
            <button className="delete-btn" onClick={() => props.deleteBook(result._id)}>Delete</button>
          )}
          
        </li>
      ))}
    </ul>
  );
}

export default BookResults;