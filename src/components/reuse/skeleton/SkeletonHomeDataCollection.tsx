import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonHomeDataCollection() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item flexDirection="row" paddingTop={4} columnGap={12} paddingHorizontal={12}>
                <SkeletonPlaceholder.Item alignItems="center" rowGap={12} flex={1}>
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={1} borderRadius={14} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={14} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={14} />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item alignItems="center" rowGap={12} flex={1}>
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={14} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={1} borderRadius={14} />
                    <SkeletonPlaceholder.Item width="100%" aspectRatio={0.75} borderRadius={14} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
