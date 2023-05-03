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
        <ul className="ImageGallery">
            {images.map(image => <GalleryItem key={image.id} image={image}  onclickImage={() => onclickImage({image})}/>)}
        </ul>    
    )
}

export default Gallery