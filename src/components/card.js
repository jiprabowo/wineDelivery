/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = props => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => props.handleGoToProductDetails()}>
      <Image
        source={{uri: props.imageSrc}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.title}>
          {props.title} {props.vintageYear}
        </Text>

        <Text style={styles.nameText}>{props.name}</Text>

        <Text style={styles.nameText}>
          {props.country} - {props.region}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${props.price}</Text>
          <View style={styles.qtyCon}>
            <Text style={styles.qtyText}>{props.qty}</Text>
            <Text style={styles.qtyText}>Left</Text>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 12}}>ADD TO CHART</Text>
          </TouchableOpacity>
          <Icon size={30} color="#ad893d" name="bookmark-border" />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  imageStyle: {
    width: '30%',
    height: '100%',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#ad893d',
  },
  nameText: {
    fontSize: 12,
  },
  price: {
    fontSize: 20,
  },
  qtyCon: {
    backgroundColor: '#ad893d',
    padding: 10,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  qtyText: {
    fontSize: 8,
    color: 'white',
  },
  button: {
    backgroundColor: '#ad893d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});
