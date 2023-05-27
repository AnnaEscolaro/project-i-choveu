const TOKEN = import.meta.env.VITE_TOKEN;

export async function searchCities(term) {
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await result.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return data;
  }
  return data;
}

export const getWeatherByCity = async (cityURL) => {
  const getCity = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await getCity.json();
  const weatherInfo = {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
  return weatherInfo;
};
