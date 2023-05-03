const Button = ({onclick}) => {
    return (
      <div className="btncontainer">
        <button
            onClick={onclick}
            className="Button"
            >
            Load More
        </button>       
      </div>
    )
  }

export default Button