import LinearGradient from 'react-native-linear-gradient';

import { colors } from 'styles/base/Variable';

export default function BottomScrollGradient() {
    return (
        <LinearGradient
            colors={['transparent', colors.black]}
            locations={[0, 1]}
            style={{
                position: 'absolute',
                bottom: 0,
                height: 32,
                width: '100%',
            }}
        />
    );
}
