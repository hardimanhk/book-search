import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import BookResults from "../components/BookResults";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  handleInputChange = event => this.setState({search: event.target.value});

  handleFormSubmit = event => {
    event.preventDefault();
      API.queryBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items);
        let resBooks = [];
        res.data.items.forEach(item => {
          let newBook = {
            "title": item.volumeInfo.title,
            "author": item.volumeInfo.authors,
            "description": item.volumeInfo.description,
            "image": item.volumeInfo.imageLinks.thumbnail,
            "link": item.volumeInfo.previewLink
          };
          resBooks.push(newBook);
        });
        console.log(resBooks);
        this.setState({results: resBooks, error: ""});
      })
      .catch(err => this.setState({error: err.message}));
      }
  
  saveBook = (title, author, description, image, link) => {
    API.saveBook({
      title: title,
      authors: author,
      description: description,
      image: image,
      link: link
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">
              Search for and save books of interest.
            </p>
          </div>
        </div>
        <div>
          <h1>Book Search</h1> 
          <SearchForm 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
        </div>
        <div>
          <BookResults results={this.state.results} saveBook={this.saveBook}/>
        </div>
      </div>
    )
  };  

};







export default Search;
