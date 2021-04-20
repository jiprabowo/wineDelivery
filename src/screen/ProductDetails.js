import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetails = props => {
  const {product} = props.route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: product.image}}
        />
        <View style={styles.productContainer}>
          <View style={{width: '100%'}}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.nameText}>
              {product.country} - {product.region}
            </Text>
            <Text style={styles.nameText}>
              {product.grapeVarietes} {product.vintageYear}
            </Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <Icon size={30} color="#ad893d" name="bookmark-border" />
          </View>

          <View style={styles.detailsCon}>
            <Text style={styles.titleBot}>PRODUCER</Text>
            <Text style={styles.nameText}>{product.producer}</Text>
          </View>

          <View style={styles.detailsCon}>
            <Text style={styles.titleBot}>BOTTLE (ML)</Text>
            <Text style={styles.nameText}>{product.bottleSize}</Text>
          </View>
          <View style={styles.detailsCon}>
            <Text style={styles.titleBot}>ALCOHOL</Text>
            <Text style={styles.nameText}>{product.alcohol}</Text>
          </View>
          <View style={styles.detailsCon}>
            <Text style={styles.titleBot}>DESCRIPTION</Text>
            <Text style={styles.nameText}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Icon size={30} color="#ad893d" name="navigate-before" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white', fontSize: 12}}>ADD TO CHART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    width: '100%',
  },
  backButton: {
    alignSelf: 'flex-start',
    position: 'absolute',
    margin: 20,
  },
  detailsCon: {width: '100%', paddingVertical: 5},

  image: {
    height: (deviceHeight * 4) / 10,
    width: '100%',
  },
  productContainer: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    color: '#ad893d',
  },
  titleBot: {
    fontSize: 16,
    color: '#9f9550',
  },
  nameText: {
    fontSize: 12,
  },
  price: {
    fontSize: 20,
  },

  button: {
    width: '90%',
    backgroundColor: '#ad893d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingBottom: 5,
  },
});
