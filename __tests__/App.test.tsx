// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';
import 'jest';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

import App from '../App';

jest.mock('react-native-modal', () => 'react-native-modal');
jest.mock('react-native-linear-gradient', () => 'react-native-linear-gradient');
jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native-nmap', () => 'react-native-nmap');
jest.mock('react-native-geolocation-service', () => 'react-native-geolocation-service');
jest.mock('react-native-modal-datetime-picker', () => 'react-native-modal-datetime-picker');
jest.mock('react-native-image-picker', () => 'react-native-image-picker');
jest.mock('react-native-skeleton-placeholder', () => 'react-native-skeleton-placeholder');

jest.mock('../src/components/reuse/skeleton/SkeletonHomeDataCollection', () => {
    return () => null;
});

jest.mock('@react-native-seoul/kakao-login', () => '@react-native-seoul/kakao-login');
jest.mock('@react-native-seoul/naver-login', () => '@react-native-seoul/naver-login');

jest.mock('@invertase/react-native-apple-authentication', () => '@invertase/react-native-apple-authentication');

it('renders correctly', () => {
    create(<App />);
});
