import React, {Component} from 'react';
import {TextInput, View, Button} from 'react-native';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      language: '',
    };
  }

  render() {
    const {firstName, lastName, email, language} = this.state;

    return (
      <View>
        <TextInput
          style={{borderWidth: 1, borderColor: 'gray'}}
          ref={input => (this.firstNameInput = input)}
          value={firstName}
          onChangeText={text => this.setState({firstName: text})}
          placeholder="First Name"
          onSubmitEditing={() => this.lastNameInput.focus()}
        />
        <TextInput
          ref={input => (this.lastNameInput = input)}
          value={lastName}
          onChangeText={text => this.setState({lastName: text})}
          placeholder="Last Name"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <TextInput
          ref={input => (this.emailInput = input)}
          value={email}
          onChangeText={text => this.setState({email: text})}
          placeholder="Email"
          onSubmitEditing={() => this.languageInput.focus()}
        />
        <TextInput
          ref={input => (this.languageInput = input)}
          value={language}
          onChangeText={text => this.setState({language: text})}
          placeholder="Language"
          onSubmitEditing={() => {
            // Perform actions when the submit button is pressed for the last input field
            console.log('Form submitted');
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            // Perform actions when the submit button is pressed for the last input field
            console.log('Form submitted');
          }}
        />
      </View>
    );
  }
}

export default LogIn;
