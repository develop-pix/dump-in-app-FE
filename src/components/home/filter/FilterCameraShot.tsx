import { View } from 'react-native';

import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import { FilterContentContainer, FilterLabelContainer } from 'styles/layout/home/filter/Filter.style';
import {
    CameraShotImage,
    CameraShotImageContainer,
    CameraShotImageText,
} from 'styles/layout/home/filter/FilterCameraShot.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableCameraShots = [
    {
        name: '클로즈업',
        image: require('assets/image/source/filter-close-up.png'),
    },
    {
        name: '상반신',
        image: require('assets/image/source/filter-bust.png'),
    },
    {
        name: '무릎',
        image: require('assets/image/source/filter-knee.png'),
    },
    {
        name: '전신',
        image: require('assets/image/source/filter-whole-body.png'),
    },
];

export default function FilterCameraShot({ filterData, setFilterData, filterOptionSelect }: FilterDataUpdateProps) {
    const handleCameraShotToggle = (cameraShot: string) => {
        const isSelected = filterData.cameraShot === cameraShot;

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            cameraShot: isSelected ? '' : cameraShot,
        }));
        filterOptionSelect();
    };

    return (
        <View>
            <FilterLabelContainer>
                <FontWhiteGreySmallerSemibold>카메라 샷</FontWhiteGreySmallerSemibold>
            </FilterLabelContainer>
            <FilterContentContainer>
                {availableCameraShots.map(cameraShotOption => {
                    const isSelected = filterData.cameraShot === cameraShotOption.name;

                    return (
                        <CameraShotImageContainer
                            isSelected={isSelected}
                            key={cameraShotOption.name}
                            onPress={() => handleCameraShotToggle(cameraShotOption.name)}>
                            <CameraShotImage
                                isSelected={isSelected}
                                cameraShot={filterData.cameraShot}
                                source={cameraShotOption.image}
                            />
                            <CameraShotImageText isSelected={isSelected}>{cameraShotOption.name}</CameraShotImageText>
                        </CameraShotImageContainer>
                    );
                })}
            </FilterContentContainer>
        </View>
    );
}
