import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ScreenB = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ScreenB</Text>

      <Button
        title="move screen C"
        onPress={() => navigation.navigate('ScreenC')}
      />
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({});
