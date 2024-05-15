import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonHomeDataCollection() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item flexDirection="row" paddingTop={4} columnGap={16} paddingHorizontal={16}>
                <SkeletonPlaceholder.Item alignItems="center" rowGap={16} flex={1}>
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={1} borderRadius={20} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={20} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={20} />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item alignItems="center" rowGap={16} flex={1}>
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={20} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={1} borderRadius={20} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={20} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
