/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform,ScrollView ,FlatList, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';



export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { listaFilters: [
      {
        "name": "Yoga",
        "image": "img/ic_yoga.png"
      },
      {
        "name": "Upper Body",
        "image": "img/ic_upper_body.png"
      },
      {
        "name": "Lower Body",
        "image": "img/ic_lower_body.png"
      },
      {
        "name": "Dance",
        "image": "img/ic_dance.png"
      },
      {
        "name": "Yoga",
        "image": "img/ic_yoga.png"
      }


    ] 
  
  };
  }
  
  renderItem = ({ item }) =>(
    <LinearGradient  style={styles.productContainer} colors={['#7F38F4','#F22B48']}>
    
        <Text style={styles.productTitle}>{item.name}</Text>
     
    </LinearGradient>
   
)

  render() {

 
    
    return (
      <View style={styles.container}>
     
       <Header
      barStyle="light-content"
      backgroundColor={'#262F38'}
      leftComponent={<Icon name='menu' size={30} color='#fff' />}
      centerComponent={{ text: 'MEU PERFIL', style: { color: '#fff', fontSize: 25, fontFamily:'Montserrat' } }}
      rightComponent={{ icon: 'settings', color: '#fff' }}
      containerStyle={{
        height: '15%'
      }}
      />

    <View style={{ backgroundColor: '#323C47', marginTop: '4%' ,width: '90%' , height: '11%' , borderRadius: 20 ,alignSelf: 'center' ,flexDirection: 'row' }}>
    
    <FlatList
    
    
    data={this.state.listaFilters}
    keyExtractor={item => JSON.stringify(item.name) }
    renderItem={this.renderItem}
    horizontal={true}
    >
    </FlatList>
   
    </View>
    
    

      
 


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262F38',
  },
  header: {
    backgroundColor: '#262F38'
  },
  productContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    
    
   
   
    
},
productTitle: {
  fontSize:10,
  fontWeight: 'bold',
  borderColor: '#333'
}
  
  
});
