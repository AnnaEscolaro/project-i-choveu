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

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
