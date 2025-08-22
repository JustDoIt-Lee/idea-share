import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import type { GestureResponderEvent } from 'react-native';
import { CurvedCharData } from '../constants/CurvedCharData';
import { COLORS } from '../constants/colors';
import {
  FIGMA_WIDTH,
  FIGMA_HEIGHT,
  TITLE_FONT_SIZE,
  CURVED_TEXT_FONT_SIZE,
  TITLE_LEFT_PADDING,
  TITLE_TOP_PADDING,
  EGG_LEFT_PADDING,
  EGG_TOP_PADDING,
  YOLK_LEFT_PADDING,
  YOLK_TOP_PADDING,
  EGG_WIDTH,
  EGG_HEIGHT,
  YOLK_WIDTH,
  YOLK_HEIGHT,
} from '../constants/layout';
import { 
  useFonts,
  Shizuru_400Regular 
} from '@expo-google-fonts/shizuru';
import { 
  PoorStory_400Regular 
} from '@expo-google-fonts/poor-story';

const { width, height } = Dimensions.get('window');

// 화면 비율 계산
const widthRatio = width / FIGMA_WIDTH;
const heightRatio = height / FIGMA_HEIGHT;

export default function MainScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Shizuru_400Regular,
    PoorStory_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const renderCurvedChar = (item: any) => (
    <View
      key={`${item.char}-${item.x}-${item.y}`}
      style={[
        styles.charContainer,
        {
          transform: [{ rotate: `${item.rotation}deg` }],
          width: item.width * widthRatio,
          height: item.height * heightRatio,
          left: item.x * widthRatio,
          top: item.y * heightRatio,
        },
      ]}
    >
      <Text style={styles.curvedChar}>{item.char}</Text>
    </View>
  );

  const navigateToIdeaList = () => {
    router.push('/idea_list');
  };

  const navigateToMyIdea = () => {
    router.push('/my_idea');
  };



  return (
    <View style={styles.container}>
      {/* 터치 타깃 (흰자/노른자) */}
      <View style={styles.eggWhite}>
        <Svg width={345 * widthRatio} height={322.04 * heightRatio} viewBox="0 0 345 323">
          <Path
            d="M345 130.778C345 221.061 323.643 323 190.024 323C99.2913 323 0 271.193 0 180.909C0 90.6261 56.4048 13.6227 172.5 0C273.81 11.988 329.667 63.2093 345 130.778Z"
            fill="white"
            onPress={navigateToIdeaList}
            onPressIn={(e: GestureResponderEvent) => {
              // 터치 피드백을 위한 추가 로직이 필요하다면 여기에
            }}
          />
        </Svg>
      </View>

      <View 
        style={[
          styles.yolk,
          {
            width: 164.29 * widthRatio,
            height: 163.47 * heightRatio,
            position: 'absolute',
            left: (width - 164.29 * widthRatio) / 2,
            top: 443 * heightRatio,
          }
        ]}
      >
        <Svg width="100%" height="100%" viewBox="0 0 165 165">
          <Path
            d="M82.5 165C128.063 165 165 128.063 165 82.5C165 36.9365 128.063 0 82.5 0C36.9365 0 0 36.9365 0 82.5C0 128.063 36.9365 165 82.5 165Z"
            fill={COLORS.YOLK}
            onPress={navigateToMyIdea}
          />
        </Svg>
      </View>

      {/* 글자/타이틀 오버레이(보이기만, 터치는 통과) */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Text style={styles.title}>i Share</Text>
        {CurvedCharData.map(renderCurvedChar)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
  },
  charContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    width: '100%',
    top: 125 * heightRatio,
    fontSize: 88,
    color: COLORS.TITLE_TEXT,
    fontFamily: 'Shizuru_400Regular',
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  eggWhite: {
    position: 'absolute',
    alignSelf: 'center',
    top: 364 * heightRatio,
  },
  yolk: {
    position: 'absolute',
    backgroundColor: COLORS.YOLK,
    borderRadius: 999,
  },
  curvedChar: {
    fontSize: 30,
    color: COLORS.TITLE_TEXT,
    fontFamily: 'PoorStory_400Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});