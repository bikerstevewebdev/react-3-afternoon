import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.searchPosts = this.searchPosts.bind(this)
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  searchPosts() {
    this.props.filterPosts(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input value={this.state.input} onChange={this.updateInput} placeholder="Search Your Feed" />

          <SearchIcon onClick={this.searchPosts} id="Search__icon" />
        </div>
        
      </section>
    )
  }
}