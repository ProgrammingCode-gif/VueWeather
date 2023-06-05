<template>
    <div class="main__weekly">
        <WeeklyItem v-for="day in getWeeklyWeather" :key="day" :day="day"/>
    </div>
</template>

<script setup>
import WeeklyItem from './WeeklyItem.vue';
import { useWeather } from '@/stores/weather'
import { computed } from 'vue';

const store = useWeather()
const getWeeklyWeather = computed(() => store.weather.daily)

</script>

<style lang="scss" scoped>

</style>