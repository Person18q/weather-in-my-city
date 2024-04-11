import { WeatherProps } from './Types';

export const Weather = (props: WeatherProps) => {
  if (props.city.trim() !== ''){
    return(
      <article className='infoWeath'>
          <p>Город: {props.name}, {props.country}</p>
          <p>Температура: {props.temp} &#8451;</p>
          <p>Рассвет: {props.sunrise}</p>
          <p>Закат: {props.sunset}</p>
      </article>
    )
  } else return <p className='error'>{props.error}</p>
}