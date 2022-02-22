import React from 'react'
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Footer from '../common/footer';
import '../stylesheet/home.css'

function home() {
  return (
    <>
        <Header/>
        <div className='container'>
        
        <Sidebar/>
        
        <span className='content'>
        
            <span className='innertext'>
             <h4>Dashboard</h4> 
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            <p>This is Dashboard page and its pretty decent</p>
            

            

            </span>
         
        </span>
        
        
        
        </div>
        <div className='m'>
        <div className='mad'>
        <Footer/>

          </div> 
        </div>
        

        
        
        
        

    </>
  )
}

export default home