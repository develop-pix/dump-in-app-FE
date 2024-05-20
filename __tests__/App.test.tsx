// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';
import 'jest';
// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';
import 'setimmediate';

import App from '../App';
/*
 * @jest-environment node
 */

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
jest.mock('react-native-config', () => 'react-native-config');
jest.mock('react-native-device-info', () => 'react-native-device-info');

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();
export const mockedSetOptions = jest.fn();

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        setOptions: mockedSetOptions,
        navigate: mockedNavigate,
    }),
    useRoute: () => jest.fn(),
    useIsFocused: () => jest.fn(() => true),
}));

jest.mock('react-native-bootsplash', () => {
    return {
        hide: jest.fn().mockResolvedValue(),
        isVisible: jest.fn().mockResolvedValue(false),
        useHideAnimation: jest.fn().mockReturnValue({
            container: {},
            logo: { source: 0 },
            brand: { source: 0 },
        }),
    };
});

jest.mock('@react-native-firebase/messaging', () => {
    const module = () => {
        return {
            getToken: jest.fn(() => Promise.resolve('myMockToken')),
        };
    };

    module.AuthorizationStatus = {
        NOT_DETERMINED: -1,
        DENIED: 0,
        AUTHORIZED: 1,
        PROVISIONAL: 2,
    };

    return module;
});

it('renders correctly', () => {
    create(<App />);
});
