import { Component } from 'react';
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { Weather } from "./components/Weather";
import { AsyncE } from './components/Types';

const API_KEY = '1f26bb3b6deb8ee27d3ba2f2efae60e8';

export default class App extends Component {
  state = {
    temp: undefined,
    name: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    city: '', // Добавляем city в состояние
  };

  gettingWeather = async (e: AsyncE) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    this.setState({city})

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
        
      const get = (item: number) => {
        let sunsetDate = new Date(item * 1000)
        let date = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`
        return date
      }

      let real_time =  Math.round(data.main.temp - 273)

      this.setState({
        temp: real_time,
        name: data.name,
        country: data.sys.country,
        sunrise: get(data.sys.sunrise),
        sunset: get(data.sys.sunset),
      });
      
    } else {
      this.setState({
        error: 'Введите город'
      });
    }
  }

  render() {
    return (
      <div className='wrapper'>
          <div className="conteiner">
            <div className="row">
              <div className='col-sm-5 info'>
                <Info />
              </div>
              <div className='col-sm-7 form'>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather 
                  city={this.state.city} // Передаем city в Weather
                  temp={this.state.temp}
                  name={this.state.name}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}