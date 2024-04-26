import WebView from 'react-native-webview';

import { WebviewContainer } from 'styles/layout/reuse/webview/webview.style';

export default function TermsOfUse() {
    const termsOfUseURI = 'https://secret-leech-e86.notion.site/14f534aed7f74f09b2db09564c40866f?pvs=4';

    return (
        <WebviewContainer>
            <WebView source={{ uri: termsOfUseURI }} />
        </WebviewContainer>
    );
}
