import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonFullScreen() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item width={Dimensions.get('window').width} height={Dimensions.get('window').height} />
        </SkeletonPlaceholder>
    );
}
