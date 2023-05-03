import React, { Component } from "react";

class Modal extends Component {
static defaultProps = {
    image: null,
    ishide: ''
}

render() {
    const {image, ishide} = this.props

    if (image === null) {
        return 
    } else {
        //console.log(image.image.likes)
        return (            
            <div className={`Overlay ${ishide}`}>
                <div className='Modal'>
                    <img src={image.image.largeImageURL} alt={image.image.tags}/>
                </div>
            </div>
        )
    }
}
} 

export default Modal