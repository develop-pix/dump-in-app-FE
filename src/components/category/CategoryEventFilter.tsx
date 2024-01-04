import { ScrollView } from 'react-native';

import { CategoryEventFilterProps } from 'interfaces/Category.interface';
import { FilterTextButton, FilterTextButtonContent } from 'styles/layout/home/filter/Filter.style';

const availableHashtags = [
    '전체',
    '캐릭터',
    '콜라보',
    '연예인',
    '계절',
    '전체2',
    '캐릭터2',
    '콜라보2',
    '연예인2',
    '계절2',
];

export default function FilterHashtag({ hashtags, setHashtags, filterOptionSelect }: CategoryEventFilterProps) {
    const handleHashtagToggle = (hashtag: string) => {
        const isSelected = hashtags.includes(hashtag);
        let hashtagArray: string[];

        if (isSelected) {
            hashtagArray = hashtags.filter(e => e !== hashtag);
        } else {
            hashtagArray = [...hashtags, hashtag];
        }

        setHashtags(hashtagArray);
        filterOptionSelect();
    };

    return (
        <>
            <ScrollView horizontal>
                {availableHashtags.map(hashtagOption => {
                    const isSelected = hashtags.includes(hashtagOption);
                    return (
                        <FilterTextButton
                            key={hashtagOption}
                            isSelected={isSelected}
                            onPress={() => handleHashtagToggle(hashtagOption)}>
                            <FilterTextButtonContent isSelected={isSelected}>{hashtagOption}</FilterTextButtonContent>
                        </FilterTextButton>
                    );
                })}
            </ScrollView>
        </>
    );
}
