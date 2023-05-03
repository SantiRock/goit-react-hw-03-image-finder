import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Gallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import search from './services/api'
let page = 1
const perPage = 12

const Notification = ({message}) => <p className="notification">{message}</p>

class App extends Component {
  state = {
    images: [],
    keyword: '',
    message: '',
    button: false,
    image: null,
    ishide: ''
  }

  onSubmit = evt => {
    evt.preventDefault()
    page = 1;
    try {
      search(this.state.keyword, page)
      .then(response => {
        console.log(response.totalHits)
        if (response.hits.length === 0) {
          this.setState({ message: 'No results found' })
          this.setState({button: false})
          this.setState({ images: []})
        } else if (response.totalHits > 12 ) {
          this.setState({ message: '' })
          this.setState({button: true})
          this.setState({ images: response.hits})
        } else {
          this.setState({ message: '' })
          this.setState({button: false})
          this.setState({ images: response.hits})
        }
      })    
    } catch (error) {
      this.setState({message: `Whoops, something went wrong: ${error.message}`})
    }
  }

  onChange = evt => {
    this.setState({keyword: evt.target.value})
    this.setState({ message: '' })
  }

  handleScroll() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  buttonHandler = evt => {
    evt.preventDefault()
    page += 1
    try {
      search(this.state.keyword, page)
      .then(response => {
        let totalHits = response.totalHits;
        let totalPages = totalHits/perPage
        if(page < totalPages) {
          this.setState({images: this.state.images.concat(response.hits)})
        } else {
          this.setState({images: this.state.images.concat(response.hits)})
          this.setState({button: false})
        }
      })
    } catch (error) {
      this.setState({message: `Whoops, something went wrong: ${error.message}`})
    } finally {
      setTimeout(this.handleScroll, 1000)
    }
  }

  escape = () => {
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          this.setState({ishide: 'ishide'})
        }
      });
  }

  onclickImage = (image) => {
    this.setState({image: image})
    this.setState({ishide: ''})
    this.escape()
    //console.log(this.state.image)
  } 

  render() {
    const { images, button, message, image, ishide } = this.state

    return (
      <>
        <Modal image={image} ishide={ishide}/> 
        <Searchbar onSubmit={this.onSubmit} onChange={this.onChange}/>
        <Notification message={message}/>
        <Gallery images={images} onclickImage={this.onclickImage}/>     
        {button && <Button onclick={this.buttonHandler} />}      
      </>
    );
  } 
};

export default App