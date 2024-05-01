declare module 'react-native-config' {
    export interface NativeConfig {
        BACKEND_API_URL: sting;
        S3_BUCKET_NAME: string;
        S3_ACCESSKEY_ID: string;
        S3_SECRET_ACCESSKEY: string;

        NAVER_LOGIN_CONSUMER_KEY: string;
        NAVER_CONSUMER_SECRET: string;
        NAVER_MAP_API_ID: string;
        NAVER_MAP_API_KEY: string;
        MMKV_ENCRYPTION_KEY: string;
    }

    export const Config: NativeConfig;
    export default Config;
}
