import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {navigationRef} from '../../App';
import Container from '../components/container';
import Images from '../assests/Images';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

type Props = {};

const LIST_IMAGES = [
  {
    image: Images.onboarding_1,
    title: 'Task Manager',
    description: 'Manage your task with ease',
  },
  {
    image: Images.onboarding_2,
    title: 'This is the title',
    description:
      'Create a unique emotional story that describes better than words',
  },
  {
    image: Images.onboarding_3,
    title: 'This is the title of the onboarding',
    description:
      'Create a unique emotional story that describes better than words',
  },
];
const {width: ScreenWidth} = Dimensions.get('window');

const input1 = [-1, 0, 1];
const output1 = ['do', 'xanh', 'do'];

const input2 = [0, 1, 2];
const output2 = ['do', 'xanh', 'do'];

const input3 = [1, 2, 3];
const output3 = ['do', 'xanh', 'do'];

const DotComponent = ({
  translateX,
  index,
}: {
  translateX: any;
  index: number;
}) => {
  const stylez = useAnimatedStyle(() => {
    let inputRange = [
      (index - 1) * ScreenWidth,
      index * ScreenWidth,
      (index + 1) * ScreenWidth,
    ];

    let outputRange = ['red', '#2FD1C5', 'red'];

    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      outputRange,
    );
    return {
      backgroundColor,
    };
  });

  return <Animated.View key={index} style={[styles.dot, stylez]} />;
};

const ScreenA = (props: Props) => {
  const flastListRef = useRef<any>(null);
  const translateX = useSharedValue(0);

  // const currentIndexValue = useDerivedValue(() => {
  //   return translateX.value / ScreenWidth;
  // });

  const onPressNext = (index: number) => {
    if (index >= LIST_IMAGES.length - 1) {
      return;
    }
    console.log(index);

    flastListRef.current &&
      flastListRef.current.scrollToOffset({index: (index + 1) * ScreenWidth});
  };

  const onSreenScroll = (event: any) => {
    translateX.value = event.nativeEvent.contentOffset.x;
    console.log('translateX', translateX.value);
  };

  const renderDot = () => {
    return LIST_IMAGES.map((_, index) => {
      return <DotComponent index={index} key={index} translateX={translateX} />;
    });
  };

  return (
    <Container style={styles.container}>
      <View style={styles.dotContainer}>{renderDot()}</View>

      <Animated.FlatList
        ref={flastListRef}
        onScroll={onSreenScroll}
        style={{marginBottom: 20}}
        data={LIST_IMAGES}
        renderItem={({item, index}) => (
          <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => onPressNext(index)}>
                  <Image source={Images.next} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 500,
          width: '100%',
          zIndex: -1,
        }}
      />
      <Text style={styles.skip}>SKIP</Text>
    </Container>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: 24,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    width: ScreenWidth,
    height: 300,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#E4EDFF',
  },
  skip: {
    position: 'absolute',
    top: -20,
    right: 42,
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 9999,
  },
  btn: {
    backgroundColor: '#2FD1C5',
    width: 65,
    height: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});
