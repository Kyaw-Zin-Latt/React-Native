import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardUpper}>
        <View style={{height: 95, marginEnd: 5, marginTop: 10}}>
          <View
            style={{
              justifyContent: 'space-around',
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <View>
              <FontAwsome5
                name="facebook"
                style={{marginEnd: 5}}
                size={23}
                color="#a3a3a3"
              />
            </View>
            <View>
              <Icon
                name="twitter"
                style={{marginEnd: 5}}
                size={23}
                color="#a3a3a3"
              />
            </View>

            <View>
              <Icon
                name="github"
                style={{marginEnd: 5}}
                size={23}
                color="#a3a3a3"
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.imageCenter}>
          <View style={styles.rounded}>
            <Image
              source={require('./img/me.jpg')}
              style={styles.roundedImage}
            />
          </View>
        </View>

        <Text style={styles.nameStyle}>Kyaw Zin Latt</Text>
        <Text style={styles.positionStyle}>Web Developer</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 10,
          }}>
          <Icon name="star" style={{marginEnd: 5}} size={23} color="#900" />
          <Icon name="star" style={{marginEnd: 5}} size={23} color="#900" />
          <Icon name="star" style={{marginEnd: 5}} size={23} color="#900" />
          <Icon name="star" style={{marginEnd: 5}} size={23} color="#900" />
          <Icon name="star-o" style={{marginEnd: 0}} size={23} color="#900" />
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Hire Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 350,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardUpper: {
    backgroundColor: 'purple',
    height: '40%',
    width: 300,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  btn: {
    borderRadius: 25,
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  btnText: {
    color: '#fefefe',
    fontWeight: 'bold',
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2.5,
  },
  rounded: {
    borderRadius: 60,
    borderColor: 'purple',
    borderWidth: 3,
  },
  imageCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -85,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  positionStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },
});
