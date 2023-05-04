import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Gallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";
import Notification from "./Notification";
import search from './services/api'

let page = 1
const perPage = 12

class App extends Component {
  state = {
    images: [],
    keyword: '',
    message: '',
    button: false,
    image: null,
    ishide: 'ishide',
    visible: false
  }

  onSubmit = evt => {
    evt.preventDefault()
    page = 1;
    this.setState({visible: true})
    this.setState({images: []})
    this.setState({button: false})
    try {
      search(this.state.keyword, page)
      .then(response => {
        //console.log(response.totalHits)
        if (response.hits.length === 0) {
          this.setState({ message: 'No results found' })
          this.setState({button: false})
          this.setState({ images: []})
          this.setState({visible: false})
        } else if (response.totalHits > 12 ) {
          this.setState({ message: '' })
          this.setState({button: true})
          this.setState({ images: response.hits})
          this.setState({visible: false})
        } else {
          this.setState({ message: '' })
          this.setState({button: false})
          this.setState({ images: response.hits})
          this.setState({visible: false})
        }
      })    
    } catch (error) {
      this.setState({message: `Whoops, something went wrong: ${error.message}`})
      this.setState({visible: false})
    }
  }

  onChange = evt => {
    this.setState({keyword: evt.target.value})
    this.setState({ message: '' })
  }

  handleScroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
   /* window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });*/
  }

 
  buttonHandler = () => {
    page += 1
    this.setState({visible: true})    
    try {
      search(this.state.keyword, page)
      .then(response => {
        let totalHits = response.totalHits;
        let totalPages = totalHits/perPage
        if(page < totalPages) {
          this.setState({images: this.state.images.concat(response.hits)})
          this.setState({visible: false})
        } else {
          this.setState({images: this.state.images.concat(response.hits)})
          this.setState({button: false})
          this.setState({visible: false})
        }
      })
    } catch (error) {
      this.setState({message: `Whoops, something went wrong: ${error.message}`})
      this.setState({visible: false})
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

  onclickmodal = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ishide: 'ishide'})
    }
  }

  onclickImage = (image) => {
    this.setState({image: image})
    this.setState({ishide: ''})
    this.escape()
    //console.log(this.state.image)
  } 

  render() {
    const { images, button, message, image, ishide, visible } = this.state
    
    return (
      <div className='App'>
        <Searchbar onSubmit={this.onSubmit} onChange={this.onChange}/>
        <Notification message={message}/>
        <Gallery images={images} onclickImage={this.onclickImage}/>
        <Loader visible={visible}/>
        {button && <Button onclick={this.buttonHandler} />}
        <Modal image={image} ishide={ishide} onclickmodal={this.onclickmodal}/>  
      </div>
    );
  } 
};

export default App