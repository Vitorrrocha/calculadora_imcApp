import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import { green, bold } from 'ansi-colors';

import Slider from '@react-native-community/slider';


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      valueKg: 70,
      valueHeight: 170,
      imc: '',
      frase: ''
    };
    this.calcImc = this.calcImc.bind(this); 
  }  

  calcImc(){
    let state = this.state;
        let height = this.state.valueHeight/100; //passa de cm para metros
        let bulk = this.state.valueKg;
        let imc = bulk/(height * height);
        this.state.imc = 'IMC: ' + imc.toFixed(2);
        if(imc < 10){
          this.state.frase = 'Você está com Desnutrição Grau V'; 
        }else if(imc < 12.9){
          this.state.frase = 'Você está com Desnutrição Grau IV';
        }else if(imc < 15.9){
          this.state.frase = 'Você está com Desnutrição Grau III';
        }else if(imc < 16.9){
          this.state.frase = 'Você está com Desnutrição Grau II';
        }else if(imc < 18.9){
          this.state.frase = 'Você está com Desnutrição Grau I';
        }else if(imc < 24.9){
          this.state.frase = 'Seu IMC está Normalizado';
        }else if(imc < 29.9){
          this.state.frase = 'Você está com Pré Obesidade';
        }else if(imc < 34.5){
          this.state.frase = 'Você está com Obesidade Grau I';
        }else if(imc < 39.9){
          this.state.frase = 'Você está com Obesidade Grau II';
        }else{
          this.state.frase = 'Você está com Obesidade Grau III';
        }
        
        this.setState(state);
  }
  
  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.logoText} >Calculadora IMC</Text>

        <Slider
          minimumValue={1}
          maximumValue={220}
          step={0.5}
          onValueChange={(selectedValue) => this.setState({valueKg: selectedValue})}
          minimumTrackTintColor="#A08E8A" //
          maximumTrackTintColor="#00FF00"
          thumbTintColor="#8c6135"
          value={this.state.valueKg}
        />
      <Text style={styles.textValue} >Peso: {this.state.valueKg} kg</Text>

      <Slider
          minimumValue={100}
          maximumValue={230}
          step={1}
          onValueChange={(selectedValue) => this.setState({valueHeight: selectedValue})}
          minimumTrackTintColor="#A08E8A"
          maximumTrackTintColor="#00FF00"
          thumbTintColor="#8c6135"
          value={this.state.valueHeight}
        />
      <Text style={styles.textValue} >Altura: {this.state.valueHeight} cm</Text>

      <TouchableOpacity style={styles.button} onPress={this.calcImc}> 
        <Text style={styles.textButton}>CALCULAR</Text>
      </TouchableOpacity>
     

      <View style={styles.boxImc} >
        <Text style={styles.textValue} >{this.state.imc}</Text>
        <Text style={styles.textValue} >{this.state.frase}</Text>
      </View>
      
      

      </View>

    );

  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  logoText: {
    margin: 40,
    fontSize: 40,
    textAlign: "center",
    color: '#A08E8A'
  },
  textValue: {
    fontSize: 21,
    textAlign: "center",
    margin: 20
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: '#A08E8A',
    height: 50, 
    borderRadius: 9
  },
  textButton: {
    fontSize: 20,
    color: 'white'
  },
  boxImc: {
    margin: 20
  }


});
