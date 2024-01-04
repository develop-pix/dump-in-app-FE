import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonGetMoreCategoryEventData() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width - 40}
                flexDirection="column"
                justifyContent="center">
                <SkeletonPlaceholder.Item flexDirection="column" gap={10} flexWrap="wrap" marginTop={10}>
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width - 40}
                        aspectRatio={1}
                        borderRadius={10}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
