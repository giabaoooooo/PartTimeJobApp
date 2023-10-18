import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../media/image/welcome.png')} style={styles.background} />

            <View style={styles.welcomeText}>
                <Text style={styles.text1}>Welcome to</Text>
                <Text style={styles.text2}>Application</Text>
            </View>

            <View style={styles.intro}>
                <Text style={styles.introText}>The best job finder & jo portal app where be best jobs will find you</Text>
            </View>

        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 5)' 
    },

container: {
    flex: 1,
        backgroundColor: '#fff',
    },

welcomeText: {
    top: 400,
    },

text1: {
    color: "#fff",
        display: 'flex',
            width: '366',
                height: '141',
                    flexDirection: 'column',
                        justifyContent: 'center',
                            flexShrink: 0,
                                textAlign: 'center',
                                    fontSize: 36,
                                        fontWeight: '500',
                                            fontStyle: 'normal',
    },
text2: {
    color: "#fff",
        display: 'flex',
            width: '366',
                height: '141',
                    flexDirection: 'column',
                        justifyContent: 'center',
                            flexShrink: 0,
                                textAlign: 'center',
                                    fontSize: 36,
                                        fontWeight: '500',
                                            fontStyle: 'normal',
    },

introText: {
    color: "#fff",
        display: 'flex',
            width: '430',
                height: '90',
                    flexDirection: 'column',
                        justifyContent: 'center',
                            flexShrink: 0,
                                textAlign: 'center',
                                    fontSize: 22,
                                        fontWeight: '500',
                                            fontStyle: 'normal',
    },
intro: {
    top: 460,
    }
})