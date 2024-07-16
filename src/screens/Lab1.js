import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import Block from '../component/Block'
import Banner from '../component/Banner'
import TextInput from '../component/TextInput'
import Button from '../component/Button'
import CustomTextInput from '../component/TextInput'
import CustomButton from '../component/Button'

const Lab1 = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Banner source={{ uri: 'https://baoduongmaynenkhi.net/wp-content/uploads/2021/03/1-1-6.jpg' }} />
                <Text style={[styles.header, { color: theme.textColor }]}>Đăng ký học</Text>
                <Block title="Thông tin cá nhân">
                    <CustomTextInput placeholder="Họ và tên" />
                    <CustomTextInput placeholder="Email" />
                    <CustomTextInput placeholder="Số điện thoại" />
                </Block>
                <Block title="Thông tin khóa học">
                    <TextInput placeholder="Tên khóa học" />
                    <TextInput placeholder="Thời gian bắt đầu" />
                </Block>
                <Block title="Thông tin liên hệ">
                    <TextInput placeholder="Địa chỉ" />
                    <TextInput placeholder="Ghi chú thêm" />
                </Block>
                <CustomButton title="Đăng ký" onPress={() => alert('Đã đăng ký thành công!')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[styles.switchLabel, { color: theme.textColor }]}>Đổi Theme</Text>
                    <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Lab1

const lightTheme = {
    brandColor: '#6200EE',
    backgroundColor: '#ffffff',
    textColor: '#000000',
};

const darkTheme = {
    brandColor: '#bb86fc',
    backgroundColor: '#121212',
    textColor: '#ffffff',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        padding: 20,
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 26,
    },
    switchLabel: {
        textAlign: 'center',
        marginVertical: 20,
    },
})