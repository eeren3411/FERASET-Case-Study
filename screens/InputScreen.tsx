import React, { useState } from 'react';
import { View, Text } from 'react-native';

import ScreenContainer from '@components/ScreenContainer';

import { commonStyles } from '@styles/common';

const InputScreen = ({ navigation }: any) => {
  return (
    <ScreenContainer style={commonStyles.container}>
      <Text>Text1</Text>
	  <Text>Text2</Text>
    </ScreenContainer>
  );
};

export default InputScreen;
