import { FormProps } from "./Types"

export const Form = (props: FormProps) => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name='city' placeholder='Город'/>
    <button>Получить погоду</button>
  </form>
)
