import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const listStyles = StyleSheet.create({
  itemContainer: {
    width: width,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  itemImage: {
    width: '100%',
    height: height / 3.5,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  itemText: {
    color: '#FFFFFF',
    backgroundColor: '#000000a0',
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    padding: 5,
    alignSelf: 'center',
  },
});
