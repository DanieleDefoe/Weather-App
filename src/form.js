/* eslint-disable no-alert */
import getWeatherData from './weatherData'
import weatherSection from './weatherSect'

const cityName = weatherSection.querySelector('.weather-section__title')
const statusImage = weatherSection.querySelector('.weather-section__status-image')
const statusText = weatherSection.querySelector('.weather-section__status-text')
const temperature = weatherSection.querySelector('.weather-section__tempo')
const feelsLike = weatherSection.querySelector('.weather-section__feels-like')
const humidity = weatherSection.querySelector('.weather-section__humidity')
const wind = weatherSection.querySelector('.weather-section__wind')
const localTime = weatherSection.querySelector('.weather-section__localtime')

const createForm = (() => {
  const form = document.createElement('form')
  form.name = 'weatherQueryForm'
  form.className = 'weather-query-form'
  form.id = 'weather-query-form'

  const searchBar = document.createElement('input')
  searchBar.name = 'weather-query'
  searchBar.className = 'weather-query-form__input'
  searchBar.placeholder = 'Enter city name'
  searchBar.required = true

  const submitBtn = document.createElement('button')
  submitBtn.className = 'weather-query-form__submit'
  submitBtn.type = 'submit'
  submitBtn.textContent = 'search'

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchBar.blur()
    getWeatherData(searchBar.value)
      .then((result) => {
        cityName.textContent = result.location.name
        statusImage.src = result.current.condition.icon
        statusText.textContent = result.current.condition.text
        temperature.textContent = `${result.current.temp_c} °C / ${result.current.temp_f} °F`
        feelsLike.textContent = `Feels like: ${result.current.feelslike_c} °C / ${result.current.feelslike_f} °F`
        humidity.textContent = `Humidity: ${result.current.humidity}%`
        wind.textContent = `Wind: ${result.current.wind_kph} km/h`
        localTime.textContent = result.location.localtime
        weatherSection.classList.remove('hidden')
      })
      .catch(() => {
        alert('BITCH, THERE IS NO SUCH CITY!')
      })
    form.reset()
  })

  form.append(searchBar, submitBtn)

  return form
})()

export default createForm
