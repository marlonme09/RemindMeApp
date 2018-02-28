import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class TasksHeader extends Component<props>{
  constructor(props){
    super(props);
    //TODO: Define state
  }

  generateDay(){
    const currentDate = new Date(),
      day = currentDate.getDay(),
      month = currentDate.getMonth(),
      year = currentDate.getFullYear(),
      date = currentDate.getDate();
    const daysOfTheWeek = [

    ];
    return `${day} ${date} de ${month} del ${year}`.toUpperCase();
  }

  render(){
    return(
      <View style={styles.Container}>
        <ImageBackground style={styles.backgroundImage} source={require('./../images/tasks-bg.jpg')}>
          <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
          <Text style={styles.pendingTasksText}>{this.props.toBeCompleted} Pendientes</Text>
          <Text style={styles.dateText}>{this.generateDay()}</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pendingTasksText: {
    marginTop: 25,
    fontSize: 36,
    color: 'white'
  },
  dateText: {
    marginTop: 8,
    fontSize: 16,
    color: '#A0A0A0'
  },
  userAvatar: {
    height: 130,
    width: 130,
    borderRadius: 65
  }
});
