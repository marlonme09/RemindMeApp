/**
 * AddTaskModalScreen
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';


export default class IntroScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
    return (
      <View style={ styles.wrapper }>
        <View style={ styles.container }>
          <View style={ styles.header }>
            <Image style={ styles.logo }
              source={ require('./../images/remindMe-logo.png') }/>
          </View>
          <View style={ styles.body }>
            <Text style={ styles.title }>Agregar nueva tarea</Text>
            <TextInput placeholder={ 'Titulo de la tarea' }
              style={ styles.input }
              onChangeText={ ( text )=>{ this.setState({ taskTitle: text }) } }/>

            <TouchableHighlight style={ styles.botonAgregar }
              onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } }>
              <Text style={ styles.textoAgregar }>AGREGAR</Text>
            </TouchableHighlight>

            <TouchableHighlight style={ styles.botonCancelar }
              onPress={ ()=>{ this.props.hideModal() } }>
              <Text style={ styles.textoCancelar }>CANCELAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.35)'
  },
  container: {
    width: 347,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: '#FFFFFF',
    borderRadius: 100
  },
  header: {
    height: 212,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ED184A'
  },
  body: {
    height: 295,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 28,
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: 285,
    height: 75
  },
  botonAgregar: {
    width: 305,
    height: 55,
    padding: 17,
    borderRadius: 100,
    backgroundColor: '#ED184A'
  },
  botonCancelar: {
    width: 305,
    height: 55,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 27,
    borderColor: '#ED184A'
  },
  textoCancelar: {
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1.55,
    color: '#ED184A'
  },
  textoAgregar: {
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1.55,
    color: '#FFFFFF'
  },
  title: {
    fontSize: 16,
    color: '#7A7A7A',
    textAlign: 'center'
  },
  input: {
    fontSize: 30,
    width: 305,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    opacity: 0.2,
    borderColor: '#1D1D26',
    color: '#000000'
  }
});
