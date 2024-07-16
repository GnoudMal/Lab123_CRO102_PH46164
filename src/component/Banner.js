import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({ source }) => {
    return (
        <Image source={source} style={styles.bannerImg} />
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerImg: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    }
})