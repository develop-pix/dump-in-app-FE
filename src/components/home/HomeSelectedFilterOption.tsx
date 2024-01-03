import React from 'react';

import { HomeSelectedFilterOptionProps } from '../../interfaces/Home.interface';
import {
    ColorBox,
    FilterOptionContainer,
    FilterOptionTextBox,
} from '../../styles/layout/home/HomeSelectedFilterOption.style';
import { FontWhiteSmallestSemibold } from '../../styles/layout/reuse/text/Text.style';

export default function HomeSelectedFilterOption({ filterData }: HomeSelectedFilterOptionProps) {
    return (
        <FilterOptionContainer>
            {Object.entries(filterData).map(([key, value]) => {
                if (key === 'frameColor' && value) {
                    return <ColorBox key={key} backgroundColor={value} />;
                }

                if (key === 'party' && value > 0) {
                    return (
                        <FilterOptionTextBox key={key}>
                            <FontWhiteSmallestSemibold>
                                {value === 5 ? '5+' : value.toString()}
                            </FontWhiteSmallestSemibold>
                        </FilterOptionTextBox>
                    );
                }

                if (key === 'concept' && value.length > 0) {
                    return (value as string[]).map((concept: string, index: number) => (
                        <FilterOptionTextBox key={`${key}-${index}`}>
                            <FontWhiteSmallestSemibold>{concept}</FontWhiteSmallestSemibold>
                        </FilterOptionTextBox>
                    ));
                }

                if (value && value.length > 0) {
                    return (
                        <FilterOptionTextBox key={key}>
                            <FontWhiteSmallestSemibold>{value}</FontWhiteSmallestSemibold>
                        </FilterOptionTextBox>
                    );
                }
            })}
        </FilterOptionContainer>
    );
}
