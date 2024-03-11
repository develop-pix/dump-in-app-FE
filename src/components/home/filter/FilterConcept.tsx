import { View } from 'react-native';

import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import {
    FilterContentContainer,
    FilterLabelContainer,
    FilterTextButton,
    FilterTextButtonContent,
} from 'styles/layout/home/filter/Filter.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableConcepts = [
    '일상',
    '커플',
    '우정샷',
    '가족',
    '앵글',
    '콜라보',
    '연예인',
    '캐릭터',
    '이달의 프레임',
    '계절',
    '생일',
    '코믹',
    '여행',
    '할로윈',
    '크리스마스',
    '기타',
];

export default function FilterConcept({ filterData, setFilterData }: FilterDataUpdateProps) {
    const handleConceptToggle = (concept: string) => {
        const isSelected = filterData.concept.includes(concept);
        const conceptArray = isSelected
            ? filterData.concept.filter(e => e !== concept)
            : [...filterData.concept, concept];

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            concept: conceptArray,
        }));
    };

    return (
        <View>
            <FilterLabelContainer>
                <FontWhiteGreySmallerSemibold>컨셉</FontWhiteGreySmallerSemibold>
            </FilterLabelContainer>
            <FilterContentContainer>
                {availableConcepts.map(conceptOption => {
                    const isSelected = filterData.concept.includes(conceptOption);
                    return (
                        <FilterTextButton
                            key={conceptOption}
                            isSelected={isSelected}
                            onPress={() => handleConceptToggle(conceptOption)}>
                            <FilterTextButtonContent isSelected={isSelected}>{conceptOption}</FilterTextButtonContent>
                        </FilterTextButton>
                    );
                })}
            </FilterContentContainer>
        </View>
    );
}
