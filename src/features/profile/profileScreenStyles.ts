import {StyleSheet} from 'react-native';

export const profileStyles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    margin: 30,
    width: '90%',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
  },
  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textContainer: {
    alignSelf: 'center',
    paddingLeft: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '15%',
    alignItems: 'center',
  },
  themeChangerContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    height: '20%',
  },
  languageChangerContainer: {
    alignItems: 'center',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
  },
  pickerContainer: {
    width: '60%',
    height: 20,
  },
});
