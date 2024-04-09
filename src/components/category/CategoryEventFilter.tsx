import { ScrollView } from 'react-native';

import { CategoryEventFilterProps } from 'interfaces/Category.interface';
import { CategoryEventFilterContainer } from 'styles/layout/category/CategoryEventFilter.style';
import { FilterTextButton, FilterTextButtonContent } from 'styles/layout/home/filter/Filter.style';

const availableHashtags = [
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

export default function CategoryEventFilter({ hashtags, setHashtags, filterOptionSelect }: CategoryEventFilterProps) {
    const handleHashtagToggle = (hashtag: string) => {
        const isSelected = hashtags.includes(hashtag);
        let hashtagArray: string[];
        isSelected ? (hashtagArray = hashtags.filter(e => e !== hashtag)) : (hashtagArray = [...hashtags, hashtag]);
        filterOptionSelect();
        setHashtags(hashtagArray);
    };

    return (
        <CategoryEventFilterContainer>
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
        </CategoryEventFilterContainer>
    );
}
