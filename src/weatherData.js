/* eslint-disable consistent-return */
/* eslint-disable no-alert */
const getWeatherData = async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=82994be9819b4868839161313230104&q=${city}&aqi=no`,
    { mode: 'cors' },
  )
  const data = await response.json()
  return data
}

export default getWeatherData
