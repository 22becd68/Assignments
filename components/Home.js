import React, {useState} from 'react';
import { View, Text, Button,ImageBackground,TouchableOpacity,Image,FlatList} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Catagory from '../components/Catagory';
import Product from '../components/Product';

 const HomeScreen = ({navigation}) => {
    const catagories = ['TrendingNow', 'Men','Women','Kids'];
  const [selectedcatagory, setSelectedcatagory]=useState('TrendingNow');
  return (
       <View style={{flex:1, backgroundColor:'#000'}}>
           <View style={styles.headers}>
           <TouchableOpacity style={{marginLeft:20}} onPress={()=>{ navigation.openDrawer() }}>
           <Icon name = "menu" size={30} color="#000"/>
           </TouchableOpacity>
           <Text> FASHION BAZAR </Text>
           </View>
           <Image source={ {uri: 'data:image/jpeg;base64,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'}} style={{width:'90%', height:120,borderRadius:10,alignSelf:'center', marginTop:20}}/>

        <View style={styles.catagoryContainer}>
       <FlatList 
         data={catagories}
         keyExtractor={(item)=>item} 
         renderItem={({item})=> <Catagory item={item} 
         selectedcatagory={selectedcatagory}
          setSelectedcatagory={setSelectedcatagory}
          />
       }
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         />
      </View>
      <View style={{flex:1,backgroundColor:'#000'}}> 
       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,marginTop:5}}>
        <Product catagory={selectedcatagory} />
        </View>
        </View>
       </View>
      );
      };
export default HomeScreen;