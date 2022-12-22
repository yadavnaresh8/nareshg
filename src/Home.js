import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className=' bg' id='bg'>



            
            <div className='pay text-center text-white'>
                <div className='container'>
                <div className='row'>
                    <div className='come col-sm-12 col-md-3 col-lg-3' id='come'>
                        <div className='pay1'>
                            <img src="https://www.themealdb.com/images/meal-icon.png" alt=""/>
                        </div>
                    </div>

                    <div className='  col-sm-12 col-md-6 col-lg-6'>
                        <div className='pay2'>
                            <h1>Welcome to TheMealDB</h1>
                            <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                            We also offer a<Link to='#'> free JSON API</Link> for anyone wanting to use it, with additional features for subscribers.</p>
                            <span><img width="18%" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"/></span>
                            <p className='m-3'>Click to Support $2 per month (cancel anytime)<br/> <p>Currently 50 supporters</p></p>
                            
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <div className='pay1'>
                            <img src="https://www.themealdb.com/images/meal-icon.png" alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </div>





            <div className='line container' >

            </div>

  

        <div className='meals'>
            <input placeholder='Search for a Meal...' type="search"  /><br/>
            <span><img src='https://www.themealdb.com/images/icons/meal-icon6.png'/>Total Meals: 285</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span><img src='https://www.themealdb.com/images/icons/meal-icon4.png' /> Total Ingredients: 574</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span> <img src='https://www.themealdb.com/images/icons/image2.png'/> Images: 285</span>

        </div>



            <div className='line2 container' >

            </div>





        
        <div className='latest container '>
            <h1 className='display-6  text-white text-center m-3'  >Latest Meals</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <Link to="/amma" ><img src="https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg" width="90%" alt=""/></Link>
                    <p>Sushi</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                <Link to="/nari" >   <img src="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg"  width="90%" alt=""/></Link>
                    <p>Fettuccine Alfredo</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                <Link to="/nana" >  <img src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"  width="90%" alt=""/></Link>
                    <p>Chivito uruguayo</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg" width="90%"  alt=""/>
                    <p>Walnut Roll Gužvara</p>
                    </div> 
                </div>





                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg" width="90%" alt=""/>
                    <p>Fresh sardines</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"  width="90%" alt=""/>
                    <p>Burek</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg"  width="90%" alt=""/>
                    <p>Mushroom soup with buckwheat</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg" width="90%"  alt=""/>
                    <p>Croatian Bean Stew</p>
                    </div> 
                </div>
            </div>

        </div>





        
        <div className='line3 container' >

        </div>




        <div className='popular container '>
            <h1 className='  text-white text-center m-3'  >Popular Ingredients</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Chicken.png" width="90%" alt=""/>
                    <p>Chicken</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Salmon.png"  width="90%" alt=""/>
                    <p>Salmon</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Beef.png"  width="90%" alt=""/>
                    <p>Beef</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Pork.png" width="90%"  alt=""/>
                    <p>Pork</p>
                    </div> 
                </div>

                </div>
                </div>




             <div className='line4 container' >

             </div>








        
             <div className='random  container '>
            <h1 className='display-6  text-white text-center m-3'  >Random Meals</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg" width="90%" alt=""/>
                    <p>Portuguese prego with green piri-piri</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg"  width="90%" alt=""/>
                    <p>Jam Roly-Poly</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg"  width="90%" alt=""/>
                    <p>Chocolate Souffle</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg" width="90%"  alt=""/>
                    <p>Rock Cakes</p>
                    </div> 
                </div>





                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/qywups1511796761.jpg" width="90%" alt=""/>
                    <p>Boulangère Potatoes</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg"  width="90%" alt=""/>
                    <p>Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg"  width="90%" alt=""/>
                    <p>Turkey Meatloaf</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg" width="90%"  alt=""/>
                    <p>Rocky Road Fudge</p>
                    </div> 
                </div>
            </div>

        </div>





        
        <div className='line3 container' >

        </div>




        <div className='popular container '>
            <h1 className='  text-white text-center m-3'  >Random Ingredients</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                   <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Shortening.png" width="90%" alt=""/>
                    <p>Shortening</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Orange%20Blossom%20Water.png"  width="90%" alt=""/>
                    <p>Orange Blossom Water</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Pitted%20Black%20Olives.png"  width="90%" alt=""/>
                    <p>Pitted Black Olives</p>
                    </div> 
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='lat1'>
                    <img src="https://www.themealdb.com/images/ingredients/Cheese%20Slices.png" width="90%"  alt=""/>
                    <p>Cheese Slices</p>
                    </div> 
                </div>

                </div>
                </div>




             <div className='line4 container' >

             </div>



             <div className='browse  container text-center'>
                <h1>Browse Country</h1>
                <img src="https://www.themealdb.com/images/icons/flags/big/64/gb.png"  alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/in.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/us.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/fr.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/ca.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/jm.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/cn.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/nl.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/eg.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/gr.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/ie.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/it.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/jp.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/kn.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/my.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/mx.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/ma.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/hr.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/no.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/pt.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/ru.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/ar.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/es.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/sk.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/th.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/sa.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/vn.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/tr.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/sy.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/dz.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/tn.png" alt=""/>&nbsp;&nbsp;&nbsp;
                <img src="https://www.themealdb.com/images/icons/flags/big/64/pl.png" alt=""/>&nbsp;&nbsp;&nbsp;

             </div>



             <div className='browse container' id='bro'> 
                <h1 className='text-center'>Browse By Name</h1>
                <div className='row'>
                    <div className='col-sm-9 col-md-9 col-lg-9 bros' id='bros'>
                <Link to="#" >A</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >B</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >C</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >D</Link>&nbsp;&nbsp;
                <span>/</span>        
                <Link to="#" >E</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >F</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >G</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >H</Link>&nbsp;&nbsp;
                <span>/</span>     
                <Link to="#" >I</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >J</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >K</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >L</Link>&nbsp;&nbsp;
                <span>/</span>        
                <Link to="#" >M</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >N</Link>&nbsp;&nbsp;
                <span>/</span>
                </div>
                <div className='col-sm-3 col-md-3 col-lg-3 bro' id='bro'>
                <Link to="#" >O</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >P</Link>&nbsp;&nbsp;
                <span>/</span>           
                

                
                <Link to="#" >Q</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >R</Link>&nbsp;&nbsp;
                <span>/</span>     
                <Link to="#" >S</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >T</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >U</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >V</Link>&nbsp;&nbsp;
                <span>/</span>        
                <Link to="#" >W</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >X</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >Y</Link>&nbsp;&nbsp;
                <span>/</span>
                <Link to="#" >Z</Link>&nbsp;&nbsp;
             </div>
             </div>
             </div>



             
        </div>
    </div>
  )
}

export default Home