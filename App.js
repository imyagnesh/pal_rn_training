import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View style={{height: 100, width: 100, backgroundColor: 'green'}}>
        <Text>A</Text>
      </View>
      <View style={{height: 100, width: 100, backgroundColor: 'blue'}}>
        <Text>B</Text>
      </View>
      <View style={{height: 100, width: 100, backgroundColor: 'white'}}>
        <Text>C</Text>
      </View>
    </View>
  );
};

export default App;
