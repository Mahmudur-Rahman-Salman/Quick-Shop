import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../../assets/types/product";
import { Link } from "expo-router";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth * 0.45;

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
      <Pressable style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    // width: "48%",
    width: itemWidth, // Takes approximately half the screen width
    flexGrow: 1, // Allows it to grow if there's extra space
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  },
  itemImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    
  },
  itemTitle: {
    fontSize: 16,
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
