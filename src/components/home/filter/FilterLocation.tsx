import { View } from 'react-native';

import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import {
    FilterContentContainer,
    FilterLabelContainer,
    FilterTextButton,
    FilterTextButtonContent,
} from 'styles/layout/home/filter/Filter.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableLocations = [
    '서울',
    '경기',
    '인천',
    '대전',
    '충북',
    '충남',
    '강원',
    '대구',
    '경북',
    '경남',
    '울산',
    '부산',
    '광주',
    '전북',
    '전남',
    '제주',
];

export default function FilterLocation({ filterData, setFilterData }: FilterDataUpdateProps) {
    const handleLocationToggle = (location: string) => {
        const isSelected = filterData.photoBoothLocation === location;

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            photoBoothLocation: isSelected ? '' : location,
        }));
    };

    return (
        <View>
            <FilterLabelContainer>
                <FontWhiteGreySmallerSemibold>지역</FontWhiteGreySmallerSemibold>
            </FilterLabelContainer>
            <FilterContentContainer>
                {availableLocations.map(locationOption => {
                    const isSelected = filterData.photoBoothLocation === locationOption;
                    return (
                        <FilterTextButton
                            key={locationOption}
                            isSelected={isSelected}
                            onPress={() => handleLocationToggle(locationOption)}>
                            <FilterTextButtonContent isSelected={isSelected}>{locationOption}</FilterTextButtonContent>
                        </FilterTextButton>
                    );
                })}
            </FilterContentContainer>
        </View>
    );
}
