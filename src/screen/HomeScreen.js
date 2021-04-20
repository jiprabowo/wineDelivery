/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Card} from '../components';

const HomeScreen = props => {
  const [product, setProduct] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [isEnd, setisEnd] = useState(false);

  useEffect(() => {
    if (pageNo === 1) {
      getProduct(1);
    }
  }, []);

  const getProduct = async currentPage => {
    try {
      setisLoading(true);
      const response = await axios.get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=1${currentPage}`,
      );
      let data = response.data.value.products;
      if (data.length === 0) {
        setisEnd(true);
      }
      setProduct([...product, ...data]);
      setisLoading(false);
      console.log('response', data);
    } catch (error) {
      console.log(error.message);
      setisLoading(false);
    }
  };

  const handleLoadMore = currentPage => {
    if (isLoading) {
      return;
    }
    if (isEnd) {
      return;
    }
    setPageNo(currentPage);
    getProduct(currentPage);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.7}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card
            imageSrc={item.image}
            title={item.name}
            name={item.grapeVarietes}
            country={item.country}
            region={item.region}
            price={item.price}
            qty={item.qty}
            vintageYear={item.vintageYear}
            handleGoToProductDetails={() =>
              props.navigation.navigate('ProductDetails', {product: item})
            }
          />
        )}
        refreshing={isLoading}
        onEndReached={() => handleLoadMore(pageNo + 1)}
        ListFooterComponent={() =>
          isLoading ? (
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                paddingVertical: 20,
              }}>
              <ActivityIndicator size={40} color="white" />
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222324',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flatList: {flex: 1, width: '100%'},
});
