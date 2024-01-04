import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonMyPageReview() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width}
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" gap={10} marginBottom={10}>
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                    />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" gap={10}>
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
