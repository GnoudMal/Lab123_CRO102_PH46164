import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const MeditationScreen = () => {
    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/videos/Thien.mp4')}
                style={styles.video}
                controls={true}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    video: {
        width: '100%',
        height: 200,
    },
});

export default MeditationScreen;
