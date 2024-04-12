import { View } from 'react-native';

import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import {
    FilterContentContainer,
    FilterLabelContainer,
    FilterTextButton,
    FilterTextButtonContent,
} from 'styles/layout/home/filter/Filter.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableParty = [1, 2, 3, 4];

export default function FilterParty({ filterData, setFilterData }: FilterDataUpdateProps) {
    const handlePartyToggle = (party: number) => {
        const isSelected = filterData.participants === party;

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            participants: isSelected ? 0 : party,
        }));
    };

    return (
        <View>
            <FilterLabelContainer>
                <FontWhiteGreySmallerSemibold>인원</FontWhiteGreySmallerSemibold>
            </FilterLabelContainer>
            <FilterContentContainer>
                {availableParty.map(partyOption => {
                    const isSelected = filterData.participants === partyOption;
                    return (
                        <FilterTextButton
                            key={partyOption}
                            isSelected={isSelected}
                            buttonWidth={36}
                            onPress={() => handlePartyToggle(partyOption)}>
                            <FilterTextButtonContent isSelected={isSelected}>{partyOption}</FilterTextButtonContent>
                        </FilterTextButton>
                    );
                })}
                <FilterTextButton
                    isSelected={filterData.participants === 5}
                    buttonWidth={46}
                    onPress={() => handlePartyToggle(5)}>
                    <FilterTextButtonContent isSelected={filterData.participants === 5}>5+</FilterTextButtonContent>
                </FilterTextButton>
            </FilterContentContainer>
        </View>
    );
}
