<template>
    <div class="main__content">
        <div class="main__content-left">
            <p class="main__content-left-degree">{{ Math.round(getFullWeather.current.temp) }}°</p>
            <p class="main__content-left-day">Сегодня</p>
            <p class="main__content-left-city">Город: {{ getFullWeather.name }}</p>
            <div class="main__content-left-img">
                <img :src="`src/assets/images/${getImg}.svg`" alt="">
            </div>
        </div>
        <div class="main__contetent-right">
            <img class="main__content-right-bg" src="@/assets/images/headerBg.svg" alt="">
            <div class="main__content-right-item">
                <div class="main__content-right-icon">
                    <img src="@/assets/images/temp.svg" alt="">
                </div>
                <span>Температура</span>
                <span>{{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}°</span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon">
                    <img src="@/assets/images/davlenie.svg" alt="">
                </div>
                <span>Давление </span>
                <span>{{ getFullWeather.current.pressure }} мм ртутного столба - нормальное</span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon">
                    <img src="@/assets/images/osadki.svg" alt="">
                </div>
                <span>Облачность</span>
                <span>{{ getFullWeather.current.clouds }}</span>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-icon">
                    <img src="@/assets/images/wind.svg" alt="">
                </div>
                <span>Ветер</span>
                <span>{{ getFullWeather.current.wind_speed }} м/с юго-запад - легкий ветер</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useWeather } from '@/stores/weather'


const store = useWeather()
const getFullWeather = computed(() => store.weather)
const desc = computed(() => store.weather.current.weather[0].description)

const getImg = computed(() => {
    const weatherIcons = {
        'scattered clouds': 'cloud',
        'clear sky': 'sun',
        'shower rain': 'sunrain',
        'rain': 'rain',
        'snow': 'osadki',
        'mist': 'wind',
        'few clouds': 'minicloud',
        'broken clouds': 'cloud',
        'thunderstorm': 'rain'
    }
    return weatherIcons[desc.value]
})



</script>

<style lang="scss" scoped>

</style>