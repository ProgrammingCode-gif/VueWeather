<template>
    <div class="main__weekly-item">
        <p class="main__weekly-day">{{ getWeekDay }}</p>
        <p class="main__weekly-date">{{ getDay }}</p>
        <img class="main__weekly-icon" :src="`src/assets/images/${getImg}.svg`" alt="">
        <p class="main__weekly-degree">{{ Math.round(day.temp.day) }}°</p>
        <p class="main__weekly-subdegree">{{ Math.round(day.temp.night) }}°</p>
        <p class="main__weekly-weather">{{ getDescr }}</p>
    </div>
</template>

<script setup>
import unix from '@/timestamp.js'
import { computed, ref } from 'vue';

const props = defineProps(['day'])
const day = props.day

const descr = {
    'Clear' : 'Ясно',
    'Broken clouds' : 'Облачно',
    'Clouds' : 'Облачно',
    'Mist' : 'Туман',
    'Thunderstorm': 'Гром',
    'Drizzle': 'Изморось',
    'Rain': 'Дождь',
    'Snow': 'Снег',
    'Smoke': 'Дым',
    'Haze': 'Туман',
    'Dust': 'Пыль',
    'Fog': 'Туман',
    'Sand': 'Песчано',
    'Ash': 'Пепельно',
    'Squall': 'Шквал',
    'Tornado': 'Торнадо'
}

const weatherIcons = {
    'scattered clouds': 'cloud',
    'clear sky': 'sun',
    'shower rain': 'sunrain',
    'rain': 'rain',
    'snow': 'osadki',
    'mist': 'wind',
    'few clouds': 'minicloud',
    'broken clouds': 'cloud',
    'thunderstorm': 'rain',
    'overcast clouds': 'minicloud'
}

const getDescr = computed(() => descr[day.weather[0].main])
const getWeekDay = computed(() => unix(day.dt, 'weekday'))
const getDay = computed(() => unix(day.dt, 'day') + ' ' + unix(day.dt, 'month'))
const getImg = computed(() => weatherIcons[day.weather[0].description])

// import pic from `@/assets/images/${getImg}.svg`


</script>

<style lang="scss" scoped>

</style>