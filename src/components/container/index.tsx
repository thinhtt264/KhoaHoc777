import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

const Container = ({children, style}: Props) => {
  return (
    <SafeAreaView edges={['top']} style={[{flex: 1}, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
