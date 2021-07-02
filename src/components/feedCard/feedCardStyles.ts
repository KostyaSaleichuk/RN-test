import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  itemImage: {
    width: 360,
    height: 210,
    borderRadius: 15,
  },
  itemTextContainer: {
    backgroundColor: 'black',
    opacity: 0.65,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'relative',
    bottom: 29,
    width: 360,
  },
  itemText: {
    color: 'white',
    fontSize: 14,
    padding: 5,
    alignSelf: 'center',
  },
});
