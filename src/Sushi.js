import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './App.css'

const Sushi = () => {
  const [data,setData] = useState([]);

  useEffect(() =>{
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Sushi").then((response) =>setData(response.data.meals));
  })
  return (
    <div className='dgs' id='dgs'>
{data.map(item=>
  <div className='food container'>
    
 
<div className='row'>
<div className='col-sm-12 col-md-4 col-lg-4'>
<div className='fd'>
  <h1>{item.strMeal}</h1>
  <img src={item.strMealThumb} width="90%" alt=""/>
</div>
<div className='r'>
  <h1 className='text-white display-6' >No tags</h1>
  <img src="https://www.themealdb.com/images/icons/Arrow-Left.png" width="30%" alt=""/>
</div>
</div>



<div className='col-sm-12 col-md-8 col-lg-8'>
<div className='fd'>
  <h1>Ingredients</h1>
  <div className='row'>
  <div className=' col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Sushi%20Rice.png" width="70%" />
      <p> {item.strMeasure1} {item.strIngredient1}</p>
    </div>
    </div>

    <div className=' col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Rice%20wine.png" width="70%" alt=""/>
      <p> {item.strMeasure2} {item.strIngredient2}</p>
    </div>
    </div>

    <div className=' col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Caster%20Sugar.png" width="70%" alt=""/>
      <p> {item.strMeasure3} {item.strIngredient3}</p>
    </div>
    </div>
    

    <div className=' col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Mayonnaise.png" width="70%" />
      <p> {item.strMeasure4} {item.strIngredient4}</p>
    </div>
    </div>

    <div className=' col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Rice%20wine.png" width="70%" alt=""/>
      <p> {item.strMeasure5} {item.strIngredient5}</p>
      
    </div>
    </div>

    <div className='col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Soy%20Sauce.png" width="70%" alt=""/>
      <p> {item.strMeasure6} {item.strIngredient6}</p>
    </div>
    </div>
    <div className='col-3 col-lg-4'>
    <div className='fds'>
      <img src="https://www.themealdb.com/images/ingredients/Cucumber.png" width="70%" alt=""/>
      <p>{item.strIngredient7}</p>
    </div>
    </div>
  </div>
</div>
</div>
</div>

<div className='in text-center text-white'>
  {item.strInstructions}
</div>
</div>




)}

<div className='browse container' id='bro'> 
                <h1 className='text-center'>Browse By Name</h1>
                <div className='row'>
                    <div className='col-sm-9 col-md-9 col-lg-9 bros' id='bros'>
                <a to="#" >A</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >B</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >C</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >D</a>&nbsp;&nbsp;
                <span>/</span>        
                <a to="#" >E</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >F</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >G</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >H</a>&nbsp;&nbsp;
                <span>/</span>     
                <a to="#" >I</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >J</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >K</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >L</a>&nbsp;&nbsp;
                <span>/</span>        
                <a to="#" >M</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >N</a>&nbsp;&nbsp;
                <span>/</span>
                </div>
                <div className='col-sm-3 col-md-3 col-lg-3 bro' id='bro'>
                <a to="#" >O</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >P</a>&nbsp;&nbsp;
                <span>/</span>           
                

                
                <a to="#" >Q</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >R</a>&nbsp;&nbsp;
                <span>/</span>     
                <a to="#" >S</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >T</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >U</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >V</a>&nbsp;&nbsp;
                <span>/</span>        
                <a to="#" >W</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >X</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >Y</a>&nbsp;&nbsp;
                <span>/</span>
                <a to="#" >Z</a>&nbsp;&nbsp;
             </div>
             </div>
             </div>

    </div>
  )
}

export default Sushi