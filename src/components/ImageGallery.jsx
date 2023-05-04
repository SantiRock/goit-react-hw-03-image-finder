import PropTypes from "prop-types"

const GalleryItem = ({image, onclickImage}) => {
    return (
        <li className='ImageGalleryItem'>
            <img 
                className="ImageGalleryItem-image" 
                src={image.webformatURL} 
                alt={image.tags}
                onClick={onclickImage} 
            />
        </li>
    )
}

const Gallery = ({ images, onclickImage }) => {
    return (
        <div className="container">
            <ul className="ImageGallery">
                {images.map(image => <GalleryItem key={image.id} image={image} 
                onclickImage={() => onclickImage({image})}/>)}
            </ul>   
        </div>
         
    )
}

GalleryItem.propTypes = {
    image: PropTypes.object,
    onclickImage: PropTypes.func,
};

Gallery.prototype = {
    images: PropTypes.array,
    onclickImage: PropTypes.func,
}

export default Gallery