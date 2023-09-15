import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-native-google-recaptcha-v2';
import React, {useState} from 'react';
import {View, Button, Alert} from 'react-native';

function MainScreen() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
    // You can perform additional actions after the reCaptcha verification is successful
    Alert.alert('Success', 'reCaptcha verification successful!');
  };

  return (
    <View>
      <GoogleReCaptcha onVerify={handleCaptchaVerify} />
      <Button
        title="Submit"
        onPress={() => {
          if (isCaptchaVerified) {
            // Perform your form submission or any other action
            Alert.alert('Success', 'Form submitted!');
          } else {
            Alert.alert('Error', 'Please complete the reCaptcha verification!');
          }
        }}
      />
    </View>
  );
}

export default MainScreen;
