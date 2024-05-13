import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonMyPageEvent() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width}
                justifyContent="center"
                alignItems="center"
                gap={10}>
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={145} borderRadius={10} />
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={145} borderRadius={10} />
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width - 20} height={145} borderRadius={10} />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
