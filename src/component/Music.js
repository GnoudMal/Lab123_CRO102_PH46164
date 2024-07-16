import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import Sound from 'react-native-sound';

// Enable playback in silence mode (iOS)
Sound.setCategory('Playback');

const MusicPlayer = () => {
    const [sound, setSound] = useState(null);
    const [url, setUrl] = useState('');

    const playSound = () => {
        console.log('Playing sound from: ' + url);
        if (sound) {
            sound.play((success) => {
                if (success) {
                    console.log('Successfully finished playing');
                } else {
                    console.log('Playback failed due to audio decoding errors');
                }
            });
        } else {
            const newSound = new Sound(url, '', (error) => {
                if (error) {
                    console.log('Failed to load the sound', error);
                    return;
                }
                setSound(newSound);
                newSound.play((success) => {
                    if (success) {
                        console.log('Successfully finished playing');
                    } else {
                        console.log('Playback failed due to audio decoding errors');
                    }
                });
            });
        }
    };

    const stopSound = () => {
        if (sound) {
            sound.stop(() => {
                console.log('Sound stopped');
            });
        }
    };

    useEffect(() => {
        return () => {
            if (sound) {
                sound.release();
            }
        };
    }, [sound]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter URL"
                onChangeText={text => setUrl(text)}
                value={url}
            />
            <Button title="Play Sound" onPress={playSound} />
            <Button title="Stop Sound" onPress={stopSound} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginVertical: 20,
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        paddingHorizontal: 10,
    }
});

export default MusicPlayer;
