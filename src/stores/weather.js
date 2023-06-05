import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeather = defineStore({
  id: 'weather',
  state: () => ({
    apiKey: '94eba51e3b4d5a933cf4fd676b0e1c61',
    weather: null,
    search: ''
  }),
  actions: {
    async getWeather(city) {
      try {
        const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`)
        const {lat, lon, local_names} = res.data[0]
        const name = local_names.ru
        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${this.apiKey}&units=metric`)
        const weatherInfo = {...res2.data, name: name}
        this.weather = weatherInfo
      } catch (error) {
        console.log('Ошибка при получении данных');
      }

    }
  },

  getters: {

  }
})
