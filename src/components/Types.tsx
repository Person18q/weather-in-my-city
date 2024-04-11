
export type AsyncE = {
    target: {
      elements: {
        city: {
          value: string;
        };
      };
    };
  
    preventDefault: () => void;
}

export type WeatherProps = {
    temp?: number;
    name?: string;
    country?: string;
    sunrise?: number;
    sunset?: number;
    error?: string;
    city: string; // Добавляем city в свойства
}

export type FormProps = {
    weatherMethod: any
}
  