import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View>
      <Image source={require('../media/image/loading.png')} style={styles.image} />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  image: {
    width: 245,
    height: 248,
    top: 250,
    left: 70,
  },
  loading: {
    textAlign: 'center',
    fontsize: '18',
    fontweight: 500,
    top: 400,
  }
})