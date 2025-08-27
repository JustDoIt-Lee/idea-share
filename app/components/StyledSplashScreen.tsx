import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface StyledSplashScreenProps {
  onReady: () => void;
}

export const StyledSplashScreen: React.FC<StyledSplashScreenProps> = ({ onReady }) => {
  React.useEffect(() => {
    // Component mounted, notify parent
    onReady();
  }, [onReady]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.1, // 화면 너비의 95%
    height: height * 0.1, // 화면 높이의 95%
  },
});

export default StyledSplashScreen;
