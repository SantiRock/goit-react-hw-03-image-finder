import PropTypes from "prop-types"

import { ThreeDots } from  'react-loader-spinner'

const Loader = ({visible}) => {
    return(
      <div className="loader">
        <ThreeDots color='#94b7ed' visible={visible}/> 
      </div>
    )
  }

  Loader.prototype = {
    onclick: PropTypes.bool,
  }

  export default Loader