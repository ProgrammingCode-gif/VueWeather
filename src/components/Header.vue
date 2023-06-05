<template>
    <header class="header">
        <nav class="header__nav">
            <a href="#" class="logo">
                <img src="@/assets/images/logo.svg" alt="">
                <span>vue weather</span>
            </a>
            <div class="header__nav-search">
                <img src="@/assets/images/gulp.svg" alt="">
                <input 
                    type="text" 
                    class="header__nav-input"
                    placeholder="Укажите город"
                    v-model="getSearch"
                    @keydown.enter="getWeatherInfo"
                >
            </div>
        </nav>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useWeather } from '@/stores/weather'

const store = useWeather()
const getSearch = computed({
    get: () => store.search,
    set: (val) => store.search = val
})
const getWeatherInfo = () => store.getWeather(getSearch.value)

</script>

<style lang="scss" scoped>

</style>