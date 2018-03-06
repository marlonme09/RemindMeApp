/*
 * TasksScreen
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Modal
} from 'react-native';

import TasksHeader from './../components/TaskHeader';
import Task from './../components/Task';
import AddTaskModal from './../modals/AddTaskModal';

export default class TasksScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title: 'Comprar Leche', completed: false },
        { id: 2, title: 'Sacar la basura', completed: false },
        { id: 3, title: 'Lava los platos', completed: false },
        { id: 4, title: 'Organizar la peda', completed: false },
        { id: 5, title: 'Soportar la cruda', completed: false },
        { id: 6, title: 'Netflix and Chill', completed: false }
      ],
      modalVisible: false
    }
  }

  showModal(){
    this.setState( {modalVisible: true} )
  }

  hideModal(){
    this.setState( {modalVisible: false} )
  }

  addTask(title){
    const id = 100 + this.state.tasks.length;
    const newTask = { id, title, completed: false};
    let tasks = [...this.state.tasks];
    tasks.push(newTask);
    this.setState( { tasks } );
    this.hideModal();
  }

  updateTask(targetId){
    let currentTask = [...this.state.tasks];
    let taskToBeUpdated = currentTask.find( task => task.id === targetId);
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    this.setState( {tasks: currentTask} );
  }

  calculateToBeCompleted(){
    let count = 0;
    this.state.tasks.forEach( task => {
      if(!task.completed){
        count++;
      }
    });
    return count;
  }

  renderTask(){
    return(
      this.state.tasks.map((task) => {
        return(
          <Task key={task.id} task={task} updateTask={this.updateTask.bind(this)}/>
        )
      })
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <TasksHeader toBeCompleted={this.calculateToBeCompleted()}/>
        <ScrollView style={styles.taskContainer}>{this.renderTask()}</ScrollView>
        <TouchableHighlight style={styles.addTaskButton} onPress={this.showModal.bind(this)}>
          <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          trasparent={true}
          onRequestClose={ ()=>{this.hideModal()}}
          visible={this.state.modalVisible}>
          <AddTaskModal
            addTask={ this.addTask.bind(this) }
            hideModal={ this.hideModal.bind(this) }/>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  addTaskButton: {
    backgroundColor: '#ED184A',
    width: 66,
    height: 66,
    borderRadius: 33,
    position: 'absolute',
    bottom: 20,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusIcon: {
    width: 30,
    height: 30
  }
});
