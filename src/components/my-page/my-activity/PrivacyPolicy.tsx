import WebView from 'react-native-webview';

import { WebviewContainer } from 'styles/layout/reuse/webview/webview.style';

export default function PrivacyPolicy() {
    const termsOfUseURI = 'https://secret-leech-e86.notion.site/fe3187991f07444a91e1bfe120a27b65?pvs=4';

    return (
        <WebviewContainer>
            <WebView source={{ uri: termsOfUseURI }} />
        </WebviewContainer>
    );
}
