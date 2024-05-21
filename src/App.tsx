/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { Vibration } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  StatusBar,
} from 'react-native';
//importing images because we need to pass them as props to the Dice component
// this below method is not recommended because we are importing all the images
//rather than importing all images we can use other method to import all images 
//like this import * as images from '../assets'
// we can use images.One, images.Two, images.Three, images.Four, images.Five, images.Six 
//to access the images
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

//props with children is a type that allows us to pass children to a component
//ImageSourcePropType is a type that allows us to pass an image source to a component
//type DiceProps is a type that allows us to pass the imageUrl and children to a component
type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType;
}>

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
return (
  <View>
    <Image
    style={styles.diceImage}
    source={imageUrl}
    />
  </View>
)
}
//App is a functional component that returns a JSX.Element
function App(): React.JSX.Element {
  //randomColor is a state variable that holds the random color
  //setrandomColor is a function that allows us to update the randomColor state variable
  //useState takes an initial value of #ffffff

  const [randomColor,setrandomColor]=useState("#ffffff");
  const generateColor=()=>{
    const letters='0123456789ABCDEF';
      let color='#';
      for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
      }

      setrandomColor(color);
  }
  //useState is a hook that allows us to add state to a functional component
  //diceImage is a state variable that holds the image source of the dice
  //setdiceImage is a function that allows us to update the diceImage state variable
  //useState takes an initial value of DiceOne
  const [diceImage,setdiceImage]=useState<ImageSourcePropType>(DiceOne);  
//rollDiceOnTap is a function that generates a random number between 1 and 6
//and sets the diceImage state variable to the corresponding dice image
//based on the random number
//it is called when the user taps on the roll dice button
//it uses the setdiceImage function to update the diceImage state variable
  const rollDiceOnTap=()=>{
    //Math.random() generates a random number between 0 and 1
    //Math.floor() rounds the number down to the nearest whole number
    //Math.random()*6 generates a random number between 0 and 6
    //Math.floor(Math.random()*6) generates a random number between 0 and 5
  const randomNumber=Math.floor(Math.random()*6)+1;
  //switch statement is used to select one of many code blocks to be executed
  //based on the value of the randomNumber
  //it sets the diceImage state variable to the corresponding dice image
  //based on the random number

  switch(randomNumber){
      case 1:
      //setdiceImage is a function that allows us to update the diceImage state variable
      //it takes the DiceOne image as an argument

      setdiceImage(DiceOne);
        break;
      case 2:
        setdiceImage(DiceTwo);
        break;
      case 3:
        setdiceImage(DiceThree);
        break;
      case 4:
        setdiceImage(DiceFour);
        break;
      case 5:
        setdiceImage(DiceFive);
        break;
      case 6:
        setdiceImage(DiceSix);
        break;
      default:
        setdiceImage(DiceOne);
        break;
    }
  
}

  return (
   
    <>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={()=>{
        //onPress is a prop that takes a function that is called when the user taps on the component
        rollDiceOnTap();
        //Vibration.vibrate is a function that allows us to vibrate the device
        //it takes a number as an argument that represents the duration of the vibration in milliseconds

        Vibration.vibrate(20);
        generateColor();
        
      }} >
        <Text style={styles.rollTheBtnTxt}>Roll Dice</Text>
      </Pressable>  
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  //StyleSheet.create is a method that allows us to create a stylesheet object
  //container is a style object that defines the appearance of the container component
  //flex:1 means that the container takes up the entire screen
  //justifyContent:'center' means that the content is centered vertically
  //alignItems:'center' means that the content is centered horizontally
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  //rollTheBtnTxt is a style object that defines the appearance of the roll dice button
  //fontSize:20 means that the font size is 20
  //color:'white' means that the text color is white
  rollTheBtnTxt:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',//fontWeight is used to make the text bold
    marginTop:20,//marginTop is used to give some space above the text
    padding:10,//padding is used to give some space around the text
    borderRadius:6,
    backgroundColor:'#2486B6',
  },
  //diceImage is a style object that defines the appearance of the dice image
  //width:200 means that the width of the image is 200
  //height:200 means that the height of the image is 200
  //margin:20 means that there is a margin of 20 around the image

  diceImage:{
    width:200,
    height:200,
    margin:20,
  },

});

export default App;
