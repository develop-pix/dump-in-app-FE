import Config from 'react-native-config';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({ id: 'tokenStorage', encryptionKey: Config.MMKV_ENCRYPTION_KEY });
