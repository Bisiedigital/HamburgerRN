import React, {useState} from 'react';
import {View} from 'react-native';
import ReCaptcha from 'react-native-recaptcha-that-works';

const GoogleReCaptcha = ({siteKey}) => {
  const [token, setToken] = useState('');

  const onMessage = event => {
    const {data} = event.nativeEvent;
    if (data && data.startsWith('TOKEN')) {
      const [, newToken] = data.split(':');
      setToken(newToken);
    }
  };

  return (
    <View>
      <ReCaptcha siteKey={siteKey} onMessage={onMessage} />
      {token && <Text>reCAPTCHA Token: {token}</Text>}
    </View>
  );
};

export default GoogleReCaptcha;
