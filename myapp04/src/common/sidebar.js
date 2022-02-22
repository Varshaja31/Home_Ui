import React,{useState} from 'react'
import '../stylesheet/sidebar.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';



function Sidebar() {
const[sidebar , setsidebar] = useState(false);





  return (
    <>
        <div className={sidebar?"mob":"main"}  >
        
        
            <div className="hamburger" onClick={()=>{setsidebar(!sidebar);console.log(sidebar)}}>
              <MenuIcon/>
              </div>
       

            <div className="side">
                  <Link to="/"><i className="fa fa-fw fa-home"></i><span> Home</span></Link>
                  <Link to="/tasks"><i className="fa fa-fw fa-search"></i><span>Tasks</span></Link>
                  <Link to="/email"><i className="fa fa-fw fa-envelope"></i><span>E-mail</span></Link>
                  <Link to="/profile"><i className="fa fa-fw fa-user"></i> <span> Profile</span></Link>
                  <Link to="/settings"><i className="fa fa-fw fa-gear"></i> <span> Settings</span></Link>

            
            </div>
            </div>  
           
            
    </>
  )
}

export default Sidebar