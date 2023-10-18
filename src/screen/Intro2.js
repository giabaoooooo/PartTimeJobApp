import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Intro2 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../media/image/intro2.png')} style={styles.image} />

      <Text style={styles.text1}>We are the best job portal flatform</Text>
      <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>

      <Pressable style={styles.btnNext} onPress={() => navigation.navigate("intro1")}>
        <Text style={styles.next}>Next</Text>
      </Pressable>

    </View>
  )
}

export default Intro2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '421',
    top: 150,
  },
  text1: {
    display: 'flex',
    width: 383,
    height: 184,
    flexDirection: 'column',
    justifyContent: 'center',
    color: "#3173FE",
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '500',
    fontStyle: 'normal',
    top: 170,
  },
  text2: {
    width: 339,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    top: 100,
    left: 30,
  },
  btnNext: {
    width: '80%',
    height: 48,
    borderRadius: 30,
    backgroundColor: "#1877f2",
    paddingVertical: 13,
    paddingHorizontal: 24,
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
    left: 40
  },
  next: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  }
})