import PropTypes from "prop-types"

const Notification = ({message}) => {
    return (
      <div className="container">
        <p className="notification">{message}</p>
      </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification