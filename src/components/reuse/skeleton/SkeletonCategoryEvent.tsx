import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { colors } from 'styles/base/Variable';

export default function SkeletonCategoryEvent() {
    return (
        <SkeletonPlaceholder backgroundColor={colors.blackgrey} highlightColor={colors.lightgrey}>
            <SkeletonPlaceholder.Item flexDirection="column" justifyContent="center" alignItems="center">
                <SkeletonPlaceholder.Item
                    width={Dimensions.get('window').width - 40}
                    aspectRatio={1}
                    borderRadius={10}
                    marginTop={20}
                />
                <SkeletonPlaceholder.Item
                    width={Dimensions.get('window').width - 40}
                    aspectRatio={1}
                    borderRadius={10}
                    marginTop={10}
                />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}
