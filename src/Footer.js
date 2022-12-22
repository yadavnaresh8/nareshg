import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>


        <div className='foot bg-dark text-white text-center ' id='foot'>
            <div className='container'>
            <div className='row'>
                <div className=' col-sm-12 col-md-3 col-lg-3'>
                    <div className='foot1 container'>
                    <p>© 2022 TheMealDB Proudly built in the UK <img src="https://www.themealdb.com/images/icons/flags/big/16/gb.png" alt=""/> </p>
                    </div>
                </div>

                <div className=' col-sm-12 col-md-6 col-lg-6'>
                    <div className='foot1 container'>
                        <img src="https://www.themealdb.com/images/logo-tcdb.png" alt=""/>
                        <img src="https://www.themealdb.com/images/logo-tadb.png" alt=""/>
                        <img src="https://www.themealdb.com/images/logo-tsdb.png" alt=""/>
                    </div>
                </div>


                <div className=' col-sm-12 col-md-3 col-lg-3'>
                    <div className='foot1 container'>
                        <Link to="#" >About</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="#" >Faq</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="#" >Contact</Link>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            </div>
        </div>



    </div>
  )
}

export default Footer