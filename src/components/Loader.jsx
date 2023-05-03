import { ThreeDots } from  'react-loader-spinner'

const Loader = ({visible}) => {
    return(
      <div className="loader">
        <ThreeDots color='#94b7ed' visible={visible}/> 
      </div>
    )
  }

  export default Loader