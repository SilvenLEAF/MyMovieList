import React from 'react'
import { Link } from 'react-router-dom'






function SignedInFooterLinks() {
  return (
    <>
     



      
     <div>
        <div className="myFooterIcons">
          <Link to="/" >
          <i className="fa fa-home"></i> Home
          </Link>
        </div>          
      </div>
      
    


      <div>
        <div className="myFooterIcons">
          <Link to="/search" >
          <i className="fa fa-search"></i> Search
          </Link>
        </div>          
      </div>



      <div>
        <div className="myFooterIcons">
          <Link to="/profile" >
          <i className="fa fa-user"></i> Profile
          </Link>
        </div>          
      </div>




      

    
  





 
    </>
  )
}

export default SignedInFooterLinks
