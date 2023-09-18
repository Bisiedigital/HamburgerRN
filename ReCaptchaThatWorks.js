// import React from 'react';
// import {View, Text} from 'react-native';

// const ReCaptchaThatWorks = () => {
//   return (
//     <View style={{alignItems: 'center', marginTop: 20}}>
//       <Text
//         style={{
//           color: 'black',
//           marginTop: 10,
//         }}
//       >
//         This is 'react-native-recaptcha-that-works' Page!
//       </Text>
//     </View>
//   );
// };

// export default ReCaptchaThatWorks;

// import React, {useRef} from 'react';
// import {View, Button} from 'react-native';

// import Recaptcha from 'react-native-recaptcha-that-works';

// const siteKey = '6Ld4OiAoAAAAANzNWxIN07mIhwfGpycflJpL0Rv7';
// const baseUrl = 'https://www.google.com/recaptcha/api2/';

// const ReCaptchaThatWorks = () => {
//   const recaptcha = useRef();

//   const send = () => {
//     console.log('send!');
//     recaptcha.current.open();
//   };

//   const onVerify = token => {
//     console.log('success!', token);
//   };

//   const onExpire = () => {
//     console.warn('expired!');
//   };

//   return (
//     <View>
//       <Recaptcha
//         ref={recaptcha}
//         siteKey={siteKey}
//         baseUrl={baseUrl}
//         onVerify={onVerify}
//         onExpire={onExpire}
//         size="invisible"
//       />
//       <Button title="Send" onPress={send} />
//     </View>
//   );
// };

// export default ReCaptchaThatWorks;

import React, {useRef, useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import Recaptcha from 'react-native-recaptcha-that-works';
import {useNavigation} from '@react-navigation/native';



const ReCaptchaThatWorks = () => {
  const navigation = useNavigation();

  const size = 'compact'; // 'invisible' | 'compact' | 'normal'

  const [key, setKey] = useState('<none>');

  const $recaptcha = useRef();

  const handleOpenPress = useCallback(() => {
    $recaptcha.current.open();
  }, []);

  const handleClosePress = useCallback(() => {
    $recaptcha.current.close();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={{margin: 20}}>
          Before we can complete your registration please complete the
          additional security verfification below.
        </Text>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          {/* <Button onPress={handleOpenPress} title="Open reCAPTCHA" /> */}
          <TouchableOpacity
            onPress={handleOpenPress}
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

          <View style={{height: 16}} />

          {/* <Text>Token: {key}</Text> */}
          {/* <Text>Size: {size}</Text> */}
        </View>

        <Recaptcha
          ref={$recaptcha}
          lang="en"
          //   headerComponent={
          //     <Button title="Close on header" onPress={handleClosePress} />
          //   }
          //   footerComponent={
          //     <Button title="Close on footer" onPress={handleClosePress} />
          //   }
          siteKey="6Ld4OiAoAAAAANzNWxIN07mIhwfGpycflJpL0Rv7"
          baseUrl="https://www.google.com/recaptcha/api2/"
          size={size}
          theme="light"
          //   onLoad={() => alert('onLoad event')}
          //   onClose={() => alert('onClose event')}
          onError={err => {
            console.warn('error', err);
            alert('onError event');
          }}
          onExpire={() => alert('onExpire event')}
          onVerify={token => {
            // alert('onVerify event');
            alert('Verified!');
            setKey(token);
            navigation.navigate('HelloWorld');
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: '#f1f1f1',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ReCaptchaThatWorks;
