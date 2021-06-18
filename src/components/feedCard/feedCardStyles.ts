import {StyleSheet} from 'react-native';

export const listStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a474e',
    paddingTop: 5,
  },
  itemImage: {
    width: 320,
    height: 200,
    borderRadius: 15,
  },
  itemTextContainer: {
    backgroundColor: 'black',
    opacity: 0.65,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'relative',
    bottom: 29,
    width: '100%',
  },
  itemText: {
    color: 'white',
    fontSize: 14,
    padding: 5,
    alignSelf: 'center',
  },
});