import React, {Component} from "react";
import API from "../utils/API";
import BookResults from "../components/BookResults";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

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
    return(
      <BookResults results={this.state.books} saveBook={this.saveBook}/>
    )
  }
}

export default Saved;
