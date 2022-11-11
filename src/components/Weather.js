import React, { useEffect, useState } from "react";
import backgrnd from "../assets/backgrnd.webp";
// import bg2 from "../assets/bg2.jpg";
// import "./background.css"
import {IoIosPartlySunny,IoIosThunderstorm,} from "react-icons/io";
import { FaMapPin,FaCloudShowersHeavy,FaSoundcloud } from "react-icons/fa";
import axios from "axios";

export default function Weather() {
  console.log("weather component");
  const [weatherdata, setweatherdata] = useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    console.log("first");
  });
  useEffect(() => {
    console.log("first");
    if (weatherdata.length <= 0) {
      const Api =
        "https://api.open-meteo.com/v1/forecast?latitude=11.2558347&longitude=75.810814&daily=weathercode,temperature_2m_max&current_weather=true&timezone=Europe%2FLondon";

      axios
        .get(Api)
        .then((response) => {
          console.log(response.data);
          setweatherdata(response.data);
          console.log(response, "response");
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [weatherdata]);

  const passWeathercode = (weathercode) => {
    switch (weathercode) {
      case 0:
        return (<div classname="flex ">
         <div><p>Clear sky</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 1:
        return (<div>
        <IoIosPartlySunny/>
         <p>Mainly clear</p></div> );
      case 2:
        // return "";
        return (<div classname="flex ">
         <div><p>Partly cloudy</p></div>
          <div> <FaSoundcloud/> </div> </div> );
      case 3:
        return (<div classname="flex ">
         <div><p>Overcast</p></div>
          <div> <FaSoundcloud/> </div> </div> );
      case 45:
        // return "";
        return (<div classname="flex ">
         <div><p>Fog</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 48:
        // return " ";
        return (<div classname="flex ">
         <div><p>Depositing rime fog</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 51:
        // return " ";
        return (<div classname="flex ">
         <div><p>Drizzle: Light intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 53:
        // return " ";
        return (<div classname="flex ">
         <div><p>Drizzle: Moderate intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 55:
        // return " ";
        return (<div classname="flex ">
         <div><p>Drizzle: Dense intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 56:
        // return " ";
        return (<div classname="flex ">
         <div><p>Freezing Drizzle: Light intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 57:
        // return " ";
        return (<div classname="flex ">
         <div><p>Freezing Drizzle: Dense intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 61:
        // return " ";
        return (<div classname="flex ">
         <div><p>Rain : Slight intensity</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 63:
        // return " ";
        return (<div classname="flex ">
         <div><p>Rain : Moderate intensity</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 65:
        // return " ";
        return (<div classname="flex ">
         <div><p>Rain : Heavy intensity</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 66:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Freezing Drizzle : Light intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 80:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Rain showers : Slight</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 96:
        // return "";
        return (<div classname="flex ">
         <div><p> Thunderstorm with slight hail </p></div>
          <div><IoIosThunderstorm/> </div> </div> );
      case 95:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Thunderstorm: Slight or moderate</p></div>
          <div> <IoIosThunderstorm/> </div> </div> );
      case 67:
        // return " : ";
        return (<div classname="flex ">
         <div><p>Freezing Rain: heavy intensity</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 71:
        // return " ";
        return (<div classname="flex ">
         <div><p> Snow fall: Slight intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 73:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Snow fall: moderate intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 75:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Snow fall: heavy intensity</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 77:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Snow grains</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 81:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Rain showers: moderate</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 82:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Rain showers: violent</p></div>
          <div> <FaCloudShowersHeavy/> </div> </div> );
      case 85:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Snow showers slight</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 86:
        // return "  ";
        return (<div classname="flex ">
         <div><p>Snow showers heavy</p></div>
          <div> <IoIosPartlySunny/> </div> </div> );
      case 99:
        // return " ";
        return (<div classname="flex ">
         <div><p>Thunderstorm with heavy hail</p></div>
          <div> <IoIosThunderstorm/> </div> </div> );

      default:
        return <h1>No project match</h1>;
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="">
      <article className="img" style={{ backgroundImage: `url(${backgrnd})` }}>
        <div className="h-80">
          <div className="flex justify-end mr-12 pt-5 text-xl tracking-wider">
            <div className="mr-2 mt-1">
              {" "}
              <FaMapPin />
            </div>
            <div>
              <p>{weatherdata.timezone} </p>
            </div>
          </div>

          <div className="card flex items-center mt-4 ml-3">
            <div>
              {" "}
              <p className="text-8xl  font-light pt-16 text-left pl-8 ">
                {`${Math.round(weatherdata.current_weather.temperature)}`}
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <div className="text-3xl pt-8">
                  <p className=""> &deg;C </p>
                </div>
                <div>
                  <p className=" ml-0 pt-28  tracking-wider text-2xl  ">
                    {passWeathercode(weatherdata.current_weather.weathercode)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="bg-slate-300 ">
          
        <div className="flex pt-24 ">
        
          <div className="pl-52  ">
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[0]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[0])}`} &deg;C
            </p>
            <br /><br/> <br/><br/>
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[1]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[1])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[2]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[2])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[3]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[3])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[4]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[4])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[5]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[5])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
            <p className="text-2xl">
              {" "}
              {weatherdata.daily.time[6]} :{" "}
              {`${Math.round(weatherdata.daily.temperature_2m_max[6])}`} &deg;C
            </p>
            <br /><br/><br/><br/> 
          </div>
          <div className="pl-96 mr-32">
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[0])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[1])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[2])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[3])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[4])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[5])}
            </p>
           <br /><br/><br/>
            <p className="text-2xl">
              {" "}
              {passWeathercode(weatherdata.daily.weathercode[6])}
            </p>
           <br /><br/><br/> 
          </div>
        </div>
        <div className="bg-slate-200 pt-20 pb-20">
          <h1 className="ml-52 text-4xl pb-10">Weather Details:</h1>
          <p className="ml-52 text-gray-500">Wind direction <span className="pl-80">Wind speed </span></p>
          <p className="ml-52 text-2xl">{weatherdata.current_weather.winddirection} <span className="pl-96">{weatherdata.current_weather.windspeed}</span></p>
      </div>
      </div>
    </div>
  );
  // )
}
