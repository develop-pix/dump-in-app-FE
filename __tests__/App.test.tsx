import 'react-native';
import React from 'react';
import App from '../App';
import 'jest';
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-modal', () => 'react-native-modal');
jest.mock('react-native-linear-gradient', () => 'react-native-linear-gradient');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native-nmap', () => 'react-native-nmap');
jest.mock(
  'react-native-geolocation-service',
  () => 'react-native-geolocation-service',
);
jest.mock(
  'react-native-modal-datetime-picker',
  () => 'react-native-modal-datetime-picker',
);
jest.mock('react-native-image-picker', () => 'react-native-image-picker');
jest.mock(
  'react-native-skeleton-placeholder',
  () => 'react-native-skeleton-placeholder',
);

it('renders correctly', () => {
  renderer.create(<App />);
});
