// import React, {useRef} from 'react';
// import { View, Button, TouchableOpacity, Text } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';

// const siteKey = '6Ld4OiAoAAAAANzNWxIN07mIhwfGpycflJpL0Rv7';
// const baseUrl = 'https://www.google.com/recaptcha/api2/';

// const ReCaptcha = ({navigation}) => {
//   const captchaFormRef = useRef(null);

//   const onMessage = event => {
//     if (event && event.nativeEvent.data) {
//       if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
//         captchaFormRef.current.hide();
//         return;
//       } else {
//         console.log('Verified code from Google: ', event.nativeEvent.data);
//         setTimeout(() => {
//           captchaFormRef.current.hide();
//           // do whatever you want here
//           navigation.navigate('HelloWorld'); // Navigate to the HelloWorld screen
//         }, 1500);
//       }
//     }
//   };

//   return (
//     <View>
//       <ConfirmGoogleCaptcha
//         ref={captchaFormRef}
//         siteKey={siteKey}
//         baseUrl={baseUrl}
//         languageCode="en"
//         onMessage={onMessage}
//       />
//       <View style={{justifyContent: 'center', alignItems: 'center'}}>
//         <TouchableOpacity
//           onPress={() => {
//             captchaFormRef.current.show();
//           }}
//           style={{width: 120, borderRadius: 5, backgroundColor: 'orange'}}>
//           <Text
//             style={{
//               color: 'black',
//               textAlign: 'center',
//               height: 30,
//               paddingTop: 5,
//             }}>
//             Open ReCaptcha
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ReCaptcha;




import React, {useRef, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';

const siteKey = '6Ld4OiAoAAAAANzNWxIN07mIhwfGpycflJpL0Rv7';
const baseUrl = 'https://www.google.com/recaptcha/api2/';

const ReCaptcha = () => {
  const navigation = useNavigation();

  const captchaFormRef = useRef(null);

  const onMessage = event => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        captchaFormRef.current.hide();
        return;
      } else {
        console.log('Verified code from Google: ', event.nativeEvent.data);
        setTimeout(() => {
          captchaFormRef.current.hide();
          // do whatever you want here
          navigation.navigate('HelloWorld'); // Navigate to the HelloWorld screen
        }, 1500);
      }
    }
  };

  // useEffect(() => {
  //   captchaFormRef.current.show(); // Show the reCAPTCHA on component mount
  // }, []);

  return (
    <View>
      <Text style={{margin: 20}}>
        Before we can complete your registration please complete the additional
        security verfification below.
      </Text>
      <ConfirmGoogleCaptcha
        ref={captchaFormRef}
        siteKey={siteKey}
        baseUrl={baseUrl}
        languageCode="en"
        onMessage={onMessage}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            captchaFormRef.current.show();
          }}
          style={{width: '90%', borderRadius: 5, backgroundColor: 'orange'}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              height: 40,
              paddingTop: 10,
            }}>
            Open ReCaptcha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReCaptcha;
