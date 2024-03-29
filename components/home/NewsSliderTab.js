import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewsSliderTab({ type }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {type === 'NEWS'
          ? 'Bảng tin'
          : type === 'DISCOUNT'
          ? 'Khuyến mãi'
          : 'Trận đấu sắp diễn ra'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() =>
          navigation.navigate('NewsListScreen', {
            type: type,
          })
        }
      >
        <Text>Xem tất cả</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 0,
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    paddingVertical: 4,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
