
import Weather from './components/Weather';
import './App.css';
import React from "react";
export default function App() {
  return(
  <div>
    <Weather/>
  </div>

//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&53da464979d399549024b1144e7f49ca=${process.env.REACT_APP_API_KEY}`)
//     .then(res => res.json())
//     .then(result => {
//       setData(result)
//       console.log(result);
//     });
//   }
//   fetchData();

// }, [lat,long])

//   return (
//     <div className="App">
// {(typeof data.main != 'undefined') ? (
//         <Weather weatherData={data}/>
//       ): (
//         <div></div>
//       )}

//     </div>
  );

  }
