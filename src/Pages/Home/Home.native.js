import React, {useEffect} from 'react';
import {FlatList, View, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Home = ({navigation: {navigate}, products, loadProducts}) => {
  // const {productsState, loadProducts} = useContext(ProductsContext);

  const {width: screenWidth} = useWindowDimensions();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const renderItem = ({item}) => {
    return (
      <RectButton
        onPress={() => {
          navigate('Details');
        }}
        style={{
          height: 160,
          width: 400,
          backgroundColor: '#fff',
          borderRadius: 20,
        }}>
        <FastImage
          source={{
            uri: item.image,
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{paddingHorizontal: 10}}>
          <Typography numberOfLines={1}>{item.title}</Typography>
          <Typography>{item.category}</Typography>
          <Typography numberOfLines={2}>{item.description}</Typography>
          <Typography>{item.price}</Typography>
        </View>
      </RectButton>
    );
  };

  const keyExtractor = item => `${item.id}`;

  const renderHorizontalList = ({item}) => {
    return (
      <RectButton
        onPress={() => navigate('Details')}
        style={{
          height: 200,
          backgroundColor: '#fff',
          width: screenWidth * 0.8,
          borderRadius: 20,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <FastImage
            source={{
              uri: item.image,
            }}
            style={{
              flex: 1,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1}}>
          <Typography>{item.title}</Typography>
        </View>
      </RectButton>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal
        data={products.data}
        renderItem={renderHorizontalList}
        style={{flex: 0}}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />
      <Button
        title="Go To Animation Page"
        onPress={() => navigate('AnimationPage')}
      />
      <View>
        <Typography>hello</Typography>
      </View>
    </View>
  );

  // return (
  //   <FlatList
  //     data={products.data}
  //     renderItem={renderItem}
  //     keyExtractor={keyExtractor}
  //     contentContainerStyle={{marginHorizontal: 10}}
  //     ItemSeparatorComponent={() => {
  //       return <View style={{height: 1, backgroundColor: 'gray'}} />;
  //     }}
  //   />
  // );

  // return (
  //   <ScrollView>
  //     {products.data.map(x => (
  //       <View style={{flexDirection: 'row', margin: 10}}>
  //         <FastImage
  //           source={{
  //             uri: x.image,
  //           }}
  //           style={{
  //             height: 100,
  //             width: 100,
  //             borderRadius: 10,
  //           }}
  //         />
  //         <View style={{flex: 1, paddingHorizontal: 10}}>
  //           <Typography numberOfLines={1}>{x.title}</Typography>
  //           <Typography>{x.category}</Typography>
  //           <Typography numberOfLines={2}>{x.description}</Typography>
  //           <Typography>{x.price}</Typography>
  //         </View>
  //       </View>
  //     ))}
  //   </ScrollView>
  // );
};

export default Home;
