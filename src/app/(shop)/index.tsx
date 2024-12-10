// import React from "react";

import { FlatList, Text, View, StyleSheet, SafeAreaView } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";
// import { useAuth } from "../../providers/auth-provider";


const Home = () => {
  // const {user} = useAuth(); 
  // console.log(user); 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <View>
            <ProductListItem product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
    // paddingHorizontal: 10,
  },
  flatListColumn: {
    justifyContent: "space-between",
    // alignItems: "flex-start",
    // rowGap: 10,
  },
});
