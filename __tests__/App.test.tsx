import 'react-native';
import React from 'react';
import App from '../App';
import 'jest';
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

it('renders correctly', () => {
  renderer.create(<App />);
});
