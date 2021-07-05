import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const listStyles = StyleSheet.create({
  itemContainer: {
    width: windowWidth,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  itemImage: {
    width: '100%',
    height: windowHeight / 3.5,
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
