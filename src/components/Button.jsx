import PropTypes from "prop-types"

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

Button.prototype = {
  onclick: PropTypes.func,
}

export default Button