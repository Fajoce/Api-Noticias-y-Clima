import React  from "react";



const Myweather = () => {
    const [clima, setClima] = React.useState()
  
    React.useEffect(() => {
      console.log('useEffect')
      obtenerDatos()
    }, [])
    
    const obtenerDatos = async () => {
      const News = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Barranquilla&appid=0cd7d60b36bc1f15c4e6f9de16b9b2b0')
      const tiempo = await News.json()
      console.log(tiempo.tiempo)
      setClima(tiempo.tiempo)
  
    }
    
    return (
        <div className="container w-80 mt-5 ml-10">
    <ul className="list-group bg-secondary w-70">
    {clima.map(item => (
      
      <li key={item.weather.id} className="list-group-item"> 
      <li className="list-group-item active w-70" aria-current="true"><h2>{item.weather.id} </h2></li>

      </li>
  
    ))} 
     </ul>
     </div>
    
    
    );
  }

export default Myweather;