import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Modal, Image} from 'react-native';
const image = require('./image/icon.png');

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        modal_visivel:false
      };
      this.abre_Modal = this.abre_Modal.bind(this);
      this.fecha_Modal = this.fecha_Modal.bind(this);

  }
    abre_Modal(){
      this.setState({modal_visivel:true})
    }
    fecha_Modal(){
      this.setState({modal_visivel:false})
    }
  render(){
    return(
      <View style = {estilo.area_fundo}>
        <Text style = {estilo.titulo}>desenvolvimento mobile</Text>
        <Text style = {estilo.sub_titulo}>Componente modal</Text>
        <Button title = 'Entrar' onPress = {this.abre_Modal} />
        <Modal animationType='slide' visible ={this.state.modal_visivel}>
          <View style = {{marginVertical:50,marginHorizontal:20,
                          boderRadius:25,padding:20,backgroundColor:'orange'}}>
          <Text style = {{alignSelf: 'center',fontSize: 20}} >
                          Oi... Seja bem vindo(a)</Text>
          <Text Style = {{alignSelf:'center',fontSize: 15}}>
                         este é um exemplo de modal</Text>
          <View style = {{height:10}}></View> 
          <Image source={image}
                            style={{height:150, width:150,borderRadius:75,
                                      alignSelf:'center'}}/>
           <Text style = {{alignSelf:'center',fontSize:15}}>
                            Aqui podemos insegir imagens, textes e quaisquer
                            outros elementos</Text>
            <Text style = {{alignSelf:'center',fontWeight:'bold'}}>
                            Pressione o botão abaixo para fechar este Modal</Text>
             <View style= {{height:10}}></View>
             <Button style = {{width:100}} title ='fechar'
                                                 onPress={this.fecha_Modal}/>
            </View>
           </Modal>
           </View>                                           
                        
    );
  }
}
const estilo = StyleSheet.create ({
  area_fundo: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold'
  },
  sub_titulo:{
    fontSize:25,
    fontStyle:'italic'
  } 
});
export default App;