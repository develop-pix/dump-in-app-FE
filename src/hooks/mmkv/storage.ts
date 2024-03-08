import { MMKV } from 'react-native-mmkv';

// FIXME: encryptionKey 수정 필요 , env활용?
export const storage = new MMKV({ id: 'tokenStorage', encryptionKey: 'hunter2' });
