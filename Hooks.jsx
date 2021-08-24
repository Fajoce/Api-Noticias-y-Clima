import {React,Fragment} from 'react'

function Hooks(){
    return(
<Fragment>
<h1>Referencia de la API de los Hooks</h1>
<p>Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.

Esta página describe las API para los Hooks incorporados en React.

Si los Hooks son nuevos para ti, es posible que desees revisar primero la descripción general. También puedes encontrar información útil en la sección de preguntas frecuentes.</p>
<h3>Hooks básicos</h3>

<ul className="list-group">
    <li className="list-group-item">useState</li>
    <li className="list-group-item">useEffect</li>
    <li className="list-group-item">useContext</li>
</ul>


<h3>Hooks adicionales</h3>
<ul className="list-group bg-primary">
    <li className="list-group-item">useReducer</li>
    <li className="list-group-item">useCallback</li>
    <li className="list-group-item">useMemo</li>
    <li className="list-group-item">useRef</li>
    <li className="list-group-item">useImperativeHandle</li>
        <li className="list-group-item">useLayoutEffect</li>
  <li className="list-group-item">useDebugValue</li>
</ul>
</Fragment>
    )
}

export default Hooks;