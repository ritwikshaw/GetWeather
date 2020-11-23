import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({ currentWeather }) {
    const {
        coord: {lon, lat},
        main: { temp },
        weather: [details],
        name,
    } = currentWeather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.texSecondary}>{description}</Text>
            <Text>Latitude-{lat}</Text>
            <Text>Longitude-{lon}</Text>
            <Text style={styles.ritwik}>Good Day Ritwik</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        marginTop: 30,
        },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    texSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    },
    ritwik: {
        padding: 20,
        fontSize: 40,
    }
})
