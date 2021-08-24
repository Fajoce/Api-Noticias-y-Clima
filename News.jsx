import React  from "react";



const MyNews = () => {
  const [noticias, setArticles] = React.useState([])
  
  React.useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const News = await fetch('http://newsapi.org/v2/top-headlines?country=mx&apiKey=87b5009a56174c7c8e5d7535ab958835')
    const articles = await News.json()
    console.log(articles)
    setArticles(articles.articles)

  }
  return (
 
 
        <div className="container w-80 mt-5 ml-10">
    <ul className="list-group bg-secondary w-70">
    {noticias.map(item => (
      
      <li key={item.id} className="list-group-item"> 
      <li className="list-group-item active w-70" aria-current="true"><h2>{item.title} </h2></li>
      <li className="list-group-item bg-dark"><img src= {item.urlToImage} className="w-50"></img> </li>
      <li className="list-group-item w-70"><p>{item.content}</p></li>
      
      <li className="list-group-item w-70">{item.author} </li>
      <li className="list-group-item w-70"><p className="w-70">{item.url}</p></li>
      </li>
  
    ))} 
     </ul>
     </div>
  
  
  );
  }

export default MyNews;