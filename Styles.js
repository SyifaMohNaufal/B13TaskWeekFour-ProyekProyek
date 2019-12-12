import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 100,
    marginBottom: 140,
  },
  container: {
    flex: 1,
    backgroundColor: '#133A30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color: '#ffffff',
  },
  texttt: {
    fontSize: 15,
    textAlign: 'center',
    margin: 0,
    color: '#ffffff',
  },
  input: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#30133a',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    padding: 15,
    width: 300,
    borderRadius: 25,
  },
  btnLanding: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#30133a',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    padding: 10,
    width: 180,
    borderRadius: 10,
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
  },
  btnLandingText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    paddingHorizontal: 16,
    // paddingBottom: 5,
  },
});

export default styles;
