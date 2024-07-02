/* //componentDidMount(): This method is called immediately after a component is mounted (inserted into the tree of React components). This is a common place to perform side effects, such as fetching data from an API. Here's an example using the fake API:
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users.slice(0, 3) });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Email: {item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default UserList; */



/* //componentDidUpdate(prevProps, prevState): This method is called immediately after updating occurs. It is not called for the initial render. Here's an example:
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      console.log('Users have been updated!');
    }
  }

  fetchUsers = () => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users.slice(0, 3) });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Email: {item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default UserList; */



// In Functional Components, you can achieve similar functionality using hooks. The equivalent of componentDidMount and componentDidUpdate are the useEffect hook.
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log('Users have been updated!');
  }, [users]);

  const fetchUsers = () => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users.slice(0, 3));
      })
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserList;