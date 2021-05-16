import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  root: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  items: {
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});

export const theme = {
  primaryColor: '#710ce3',
  borderColor: 'gray',
  buttonTextColor: 'white',
  backgroundColor: 'white',
};
