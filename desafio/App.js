/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Image ,FlatList, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { Fonts } from './src/utils/fonts';


const ic_yoga = require('./src/img/ic_yoga.png');
const ic_upper = require('./src/img/ic_upper_body.png');
const ic_lower = require('./src/img/ic_lower_body.png');
const ic_dance = require('./src/img/ic_dance.png');

const running = require('./src/img/running.png');
const cycling = require('./src/img/cycling.png');
const gym = require('./src/img/gym.png');
const yoga = require('./src/img/yoga.png');

const time = require('./src/img/ic_time.png');
const bike = require('./src/img/ic_bike.png');
const balance = require('./src/img/ic_balance.png');



export default class App extends Component{
  state = {
    listaFilters: [
      {
        "name": "Yoga",
        "image": ic_yoga
      },
      {
        "name": "Upper Body",
        "image": ic_upper
      },
      {
        "name": "Lower Body",
        "image": ic_lower
      },
      {
        "name": "Dance",
        "image": ic_dance
      },
      {
        "name": "Yoga",
        "image": ic_yoga
      }
    ],
    listaExercicies: [
      {
        "name": "Corrida",
        "image": running,
        "calories": 400,
        "time": 30,
        "weight": 52,
        "when": ""
      },
      {
        "name": "Bicicleta",
        "image": cycling,
        "calories": 630,
        "time": 40,
        "weight": 52,
        "when": "today"
      },
      {
        "name": "Musculação",
        "image": gym,
        "calories": 950,
        "time": 60,
        "weight": 52,
        "when": ""
      },
      {
        "name": "Yoga",
        "image": yoga,
        "calories": 200,
        "time": 80,
        "weight": 52,
        "when": "yesterday"
      }

    ]
};
  
  
renderItem = ({ item }) =>(

  
    <LinearGradient  style={styles.itemListHorizontal} colors={['#7F38F4','#F22B48']}>
    <Image source={item.image} />
       

    </LinearGradient>
    
)

renderListtwo = ({ item }) =>(

  
  <View style={styles.itemListVertical}>
 
 <View style={styles.subContainerListVert}>
  <View style={styles.containerCirucularListVert}>
  <Image source={item.image} style={{alignSelf: 'center'}}/>


  </View>

<View style={styles.containerInfoListVert}>
  <Text style={{fontSize: 20, color: '#FEFFFF', fontFamily: Fonts.MontserratBold}}>{item.name.toUpperCase()}</Text>

<View style={styles.subCotainerInfo}>
  <Image source={bike}  />
  <Text style={{color: '#FEFFFF',fontSize: 10 ,  fontFamily: Fonts.MontserratBold}}>{item.calories} kcal</Text>

  <Image source={time} style={{ marginLeft: '5%'}} />
  <Text style={styles.infosListVert}>{item.time} m</Text>
  <Image source={balance} style={{ marginLeft: '5%'}} />
  <Text style={styles.infosListVert}>{item.weight} Kg</Text>


</View> 
<View style={styles.containerButtonsListVert}>

<View style={styles.buttonListVert}>
<Text style={{ alignSelf: 'center', color: '#FEFFFF' ,fontFamily: Fonts.MontserratLight}}>Hoje</Text>   
</View> 
<View style={styles.buttonListVertHoje}>
<Text style={{ alignSelf: 'center', color: '#FEFFFF' ,fontFamily: Fonts.MontserratLight}}>Ontem</Text>   
</View> 
</View> 

</View>
  
  

  </View>

  </View>
  
)

  render() {

 
    
    return (
      <View style={styles.container}>
     
       <Header
      barStyle="light-content"
      backgroundColor={'#262F38'}
      leftComponent={<Icon name='menu' size={30} color='#fff' />}
      centerComponent={{ text: 'MEU PERFIL', style: { color: '#fff', fontSize: 25, fontFamily: Fonts.MontserratRegular } }}
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
   
   <View style={styles.containerListSub}>
    <FlatList
    data={this.state.listaExercicies}
    keyExtractor={item => JSON.stringify(item.name) }
    renderItem={this.renderListtwo}
   
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
containerLisOne: {
  backgroundColor: '#323C47', 
  marginTop: '4%' ,
  width: '90%' , 
  height: '11%' , 
  borderRadius: 20 ,
  alignSelf: 'center' ,
  flexDirection: 'row' 
},
itemListHorizontal: {
    width: 60,
    height: 60,
   
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
},
itemListVertical: {
  backgroundColor: '#323C47', 
  marginTop: '8%' ,
  width: '90%' , 
  borderRadius: 20,
  justifyContent: 'center',
  alignSelf: 'center' ,
  
},
subContainerListVert:
{
  flexDirection: 'row'
},
containerCirucularListVert:
{ 
  width: 100, 
  height: 100, 
  backgroundColor:'#262F38',  
  marginLeft: '8%', 
  marginBottom: '5%', 
  borderRadius: 100, 
  justifyContent: 'center', 
  alignContent: 'center'  

},
containerInfoListVert: 
{
  marginTop: '3%', 
  marginLeft: '7%'

},
subCotainerInfo:
{
  flexDirection: 'row', 
  marginTop: '5%', 
  
  flex: 1
},
infosListVert:
{
  color: '#FEFFFF',  
  marginLeft: '2%',
  fontFamily: Fonts.MontserratBold,
  fontSize: 10
},
containerButtonsListVert:
{
  flexDirection: 'row',  
  flex: 2, 
  alignItems: 'center', 
  marginBottom: '15%'
},
buttonListVert:
{
  borderWidth: 1, 
  borderRadius: 20, 
  width: '30%', 
  borderColor:'#FEFFFF'
},
buttonListVertHoje: {
  borderWidth: 1, 
  borderRadius: 20, 
  width: '30%', 
  borderColor:'#FEFFFF',
  marginLeft: '3%'
},
containerListSub: {
  marginTop: '4%',
  flex: 1,
},

  
  
});
