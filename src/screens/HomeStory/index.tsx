import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../assets/theme';
import {IProduct} from '../../lib/@types/Products';
import {useProducts} from '../../apis/hooks/useProducts';
import {Loading} from '../../components';
import ProductRow from './component/ProductRow';
import ListSeparator from './component/ListSeparator';

const HomeScreen = () => {
  const {isLoading, productList, refetch, isFetching} = useProducts();

  const keyExtractor = useCallback((item: IProduct) => item.id.toString(), []);
  const listDivider = () => <ListSeparator />;
  const renderItem: ListRenderItem<IProduct> = ({item}) => (
    <ProductRow product={item} key={item?.id} />
  );
  return (
    <View style={styles.container}>
      {isLoading && <Loading size="large" />}
      <FlatList
        contentContainerStyle={styles.listContainer}
        keyExtractor={keyExtractor}
        data={productList?.data}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={listDivider}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  listContainer: {
    backgroundColor: colors.white,
    paddingVertical: wp(4),
    paddingHorizontal: 6,
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
});
