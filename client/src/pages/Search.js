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
        let resBooks = [];
        res.data.items.forEach(item => {
          let newBook = {
            "title": "Unknown",
            "authors": ["Unknown"],
            "description": "Unknown",
            "image": "Unknown",
            "link": "Unknown",
          };
          if (item.volumeInfo.title) {
            newBook.title = item.volumeInfo.title;
          }
          if (item.volumeInfo.authors) {
            newBook.authors = item.volumeInfo.authors;
          }
          if (item.volumeInfo.description) {
            newBook.description = item.volumeInfo.description;
          }
          if (item.volumeInfo.imageLinks.thumbnail) {
            newBook.image = item.volumeInfo.imageLinks.thumbnail;
          }
          if (item.volumeInfo.previewLink) {
            newBook.link = item.volumeInfo.previewLink;
          }
          resBooks.push(newBook);
        });
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
