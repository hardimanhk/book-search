import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Search from "../pages/Search";
import Saved from "../pages/Saved";

class Container extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Saved") {
      return <Saved />;
    } 
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
