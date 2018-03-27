import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Post from "./Post/Post"

import Header from './Header/Header'
import Compose from './Compose/Compose'

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      base: 'https://practiceapi.devmountain.com/api'
    }

    this.updatePost = this.updatePost.bind( this )
    this.deletePost = this.deletePost.bind( this )
    this.createPost = this.createPost.bind( this )
    this.filterPosts = this.filterPosts.bind( this )
  }
  
  componentDidMount() {
    axios.get(`${this.state.base}/posts`).then((res) => {
      console.log(res.data)
      this.setState({
        posts: res.data
      })
    })
  }

  updatePost(id, text) {
    console.log(id, text)
    axios.put(`${this.state.base}/posts/?id=${id}`, {"text": text}).then((res) => {
      this.setState({
        posts: res.data
      })
    })// axios.put(`${this.state.base}/posts/?id=${id}`, {})
  }

  deletePost(id) {
    axios.delete(`${this.state.base}/posts/?id=${id}`).then(res => {
      this.setState({
        posts: res.data
      })
    })
  }

  createPost(text) {
    axios.post(`${this.state.base}/posts`, {"text": text}).then((res) => {
      this.setState({
        posts: res.data
      })
    })
  }

  filterPosts(searchText) {
    axios.get(`${this.state.base}/posts/filter/?text=${searchText}`).then(res => {
      this.setState({
        posts: res.data
      })
    })
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App__parent">
        <Header filterPosts={this.filterPosts}/>

        <section className="App__content">

          <Compose createPost={this.createPost}/>
          {posts.map(item  => {return <Post  deletePost={this.deletePost} updatePost={this.updatePost} key={item.id} id={item.id} text={item.text} date={item.date}/>})}
          
        </section>
      </div>
    );
  }
}

export default App
