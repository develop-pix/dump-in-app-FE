import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonGetMoreMyPageReview() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width}
                justifyContent="center"
                alignItems="center">
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" gap={16} paddingHorizontal={16}>
                    <SkeletonPlaceholder.Item flex={1} aspectRatio={0.75} borderRadius={20} />
                    <SkeletonPlaceholder.Item flex={1} aspectRatio={0.75} borderRadius={20} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
