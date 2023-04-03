const createWeatherSection = (() => {
  const weatherSection = document.createElement('section')
  weatherSection.className = 'weather-section hidden'

  const title = document.createElement('h2')
  title.className = 'weather-section__title'

  const statusImage = new Image()
  statusImage.className = 'weather-section__status-image'

  const statusText = document.createElement('p')
  statusText.className = 'weather-section__status-text'

  const temperature = document.createElement('p')
  temperature.className = 'weather-section__tempo'

  const feelsLike = document.createElement('p')
  feelsLike.className = 'weather-section__feels-like'

  const humidity = document.createElement('p')
  humidity.className = 'weather-section__humidity'

  const wind = document.createElement('p')
  wind.className = 'weather-section__wind'

  const localTime = document.createElement('p')
  localTime.className = 'weather-section__localtime'

  weatherSection.append(
    title,
    statusImage,
    statusText,
    temperature,
    feelsLike,
    humidity,
    wind,
    localTime,
  )

  return weatherSection
})()

export default createWeatherSection
