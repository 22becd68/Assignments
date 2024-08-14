import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';
 
 const GettingStarted = ({ navigation }) => {
  return (
           
        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGBedtmLxZGk2UgdBKzslxmFVKyHL0UHDUw&s'}} style={styles.imageBackground}>
          <View style={styles.container}>
            <View style={styles.box}>
            <Text style={styles.title}>          Fashion Bazar          </Text>
            <Text style={styles.bottomtitle}>           Stay in style.           </Text>
            <Button title='Login' onPress={()=>navigation.navigate('Login')}/>
              <View style={styles.buttonSpacing}/>
          <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
            </View>
            
        </View>
          </ImageBackground>
      );
      };
export default GettingStarted;