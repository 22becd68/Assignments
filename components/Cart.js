import React, { useContext } from 'react';
import { View, Text, FlatList, Button,Image,ImageBackground } from 'react-native';
import { useProduct } from './reducerContext';
import styles from '../styles/styles';
import Address from '../components/Address'; 

export const CartScreen = ({ navigation }) => {
  const { state, dispatch } = useProduct(); 

 
  const removeFromCart = (itemID) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemID,
    });
  };

  return (
  <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKsKg5wL01nlqjqcTJTBqgGQQGhWiDv5ktA&s"}} style={styles.imageBackground}> 
    <View style={styles.container}>
      {state.cart.length === 0 ? (
        <Text style={styles.title}>No items in the cart</Text>
      ) : (
        <FlatList
          data={state.cart}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
             <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
             
          <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
          <View style={styles.buttonSpacing}/>
          <Button title="Buy Now" onPress={()=>navigation.navigate(Address)}/>
         
            </View>
          )}
        />
      )}
    
      
     
    </View>
  </ImageBackground>
  );
};

export default CartScreen;
