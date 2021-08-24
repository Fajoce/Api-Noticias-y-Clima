import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hooks from './components/Hooks';
import CitySelector from './components/CitySelector';
import UseFetch from './hook/UseFetch'
import {API_KEY, API_BASE_URL} from './Config';
import WeatherList from './components/WeatherList';

import {BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };
  return (
    <div className="App">
<Navbar></Navbar>
<Router>
<Switch>
  <Route path="/Weather">
 <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)}/>

 {getContent()}
   

 </Route>
 <Route path="/Hooks">
<Hooks></Hooks>
 </Route>
 <Route path="/">
 <News></News>

 </Route>
</Switch>
</Router>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
