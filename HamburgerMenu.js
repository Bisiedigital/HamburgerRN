import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import {
  List,
  ListItem,
  SearchBar,
  Button,
  Avatar,
  Icon,
  SocialIcon,
} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setIsModalVisible(!isModalVisible);
  };

  const handleFettanLogoPress = () => {
    navigation.navigate('Home');
    setMenuVisible(false);
    setIsModalVisible(false);
  };

  const handleAboutUsPress = () => {
    navigation.navigate('AboutOur');
     setMenuVisible(false);
     setIsModalVisible(false);
    console.log('Navigating to About Us');
  };

  const handleReCaptchaPress = () => {
    navigation.navigate('Captcha Verification');
     setMenuVisible(false);
     setIsModalVisible(false);
    console.log('Navigating to "ReCaptcha" page!');
  };

  const handleReCaptchaThatWorksPress = () => {
    navigation.navigate('Captcha ThatWorks Verification');
     setMenuVisible(false);
     setIsModalVisible(false);
    console.log('Navigating to "react-native-recaptcha-that-works" page!');
  };
  const handleAirtimePress = () => {
    navigation.navigate('Top up Airtime');
    setMenuVisible(false);
    setIsModalVisible(false);
    console.log('Navigating to "Airtime" page!');
  };
  const handleLogInPress = () => {
    navigation.navigate('Log In');
    setMenuVisible(false);
    setIsModalVisible(false);
    console.log('Navigating to "Log In" page!');
  };

  const handleCloseModal = () => {
    setMenuVisible(false);
    setIsModalVisible(false);
  };

  const fettanLogo = require('./fettan_icon.png');

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        <View
          style={{
            alignItems: 'left',
            left: 0,
          }}>
          <Icon name={'menu'} size={30} iconStyle={{}} />
        </View>
      </TouchableOpacity>

      {menuVisible && (
        <Modal
          visible={isModalVisible}
          animationType="fade"
          transparent
          onRequestClose={handleCloseModal}>
          <TouchableOpacity style={{flex: 1}} onPress={handleCloseModal} />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'left',
              backgroundColor: 'lightgray',
              width: '30%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={handleFettanLogoPress}>
              <Image source={fettanLogo} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={handleAboutUsPress}>
              <Text>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={handleAirtimePress}>
              <Text>Airtime</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={handleReCaptchaPress}>
              <Text>ReCaptcha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.listItem}
              onPress={handleReCaptchaThatWorksPress}>
              <Text>ReCaptcha ThatWorks</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.listItem, {marginTop: 30}]}
              onPress={handleLogInPress}>
              <Text>Log In</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 20,
    marginTop: 10,
  },
});

export default HamburgerMenu;
