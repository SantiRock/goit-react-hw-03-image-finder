const Searchbar = ({onSubmit, keyword, onChange}) => {
    return (
        <header className='Searchbar'>
            <form className='SearchForm ' onSubmit={onSubmit}>
             <button type='submit' className='SearchForm-button fa fa-search'>
                 <span className='SearchForm-button-label'></span>
             </button>
            
             <input
                className='SearchForm-input'
                type='text'
                autoComplete='off'
                autoFocus
                placeholder="Search images and photos"
                value={keyword}
                onChange={onChange}
             />
            </form>
        </header>
    )
}

export default Searchbar