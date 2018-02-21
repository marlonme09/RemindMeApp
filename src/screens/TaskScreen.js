import React from 'react';
import {
  View,
  Text
} from 'react-native';
export class TaskScreen extends Component{
  render(){
    <View styles={styles.container}>
    <Text>Task Screen Container </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'green'
  }
});
