import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonHomeDataCollection() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" paddingTop={16}>
                <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={1}
                        borderRadius={20}
                        marginBottom={15}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                        marginBottom={15}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                        marginBottom={15}
                    />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                        marginBottom={15}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={1}
                        borderRadius={20}
                        marginBottom={15}
                    />
                    <SkeletonPlaceholder.Item
                        width={Dimensions.get('window').width * 0.45}
                        aspectRatio={0.75}
                        borderRadius={20}
                        marginBottom={15}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
