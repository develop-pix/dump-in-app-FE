import { View } from 'react-native';

import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import {
    FilterContentContainer,
    FilterTextButton,
    FilterTextButtonContent,
} from 'styles/layout/home/filter/Filter.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableParty = [1, 2, 3, 4];

export default function FilterParty({ filterData, setFilterData, filterOptionSelect }: FilterDataUpdateProps) {
    const handlePartyToggle = (party: number) => {
        const isSelected = filterData.party === party;

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            party: isSelected ? 0 : party,
        }));

        filterOptionSelect();
    };

    return (
        <View>
            <FontWhiteGreySmallerSemibold>인원</FontWhiteGreySmallerSemibold>

            <FilterContentContainer>
                {availableParty.map(partyOption => {
                    const isSelected = filterData.party === partyOption;
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
                    isSelected={filterData.party === 5}
                    buttonWidth={46}
                    onPress={() => handlePartyToggle(5)}>
                    <FilterTextButtonContent isSelected={filterData.party === 5}>5+</FilterTextButtonContent>
                </FilterTextButton>
            </FilterContentContainer>
        </View>
    );
}
