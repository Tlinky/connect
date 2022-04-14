import React from 'react';
import {View, Text, Button} from 'react-native';

const TemplatePage: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TemplatePage</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default TemplatePage;
