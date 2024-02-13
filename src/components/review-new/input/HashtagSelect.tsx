import { setHashtag } from 'hooks/redux/ReviewNew';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { HashtagSelectProps } from 'interfaces/ReviewNew.interface';
import {
    FontBlackSmallerSemibold,
    FontLightGreySmallerMedium,
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    HashtagButton,
    HashtagSelectContainer,
    HashtagSelectWrapper,
} from 'styles/layout/review-form/input/HashtagSelect.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function HashtagSelect({ errorData }: HashtagSelectProps) {
    const dispatch = useAppDispatch();
    const concept = useAppSelector(state => state.reviewNew).concept;
    const availableHashtag = [
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

    /** 컨셉 선택시 dispatch , 최대 5개 까지 선택 가능 */
    const onPressHashtag = (tag: string) => {
        if (concept.includes(tag)) {
            const popHashtag = concept.filter(index => index !== tag);
            dispatch(setHashtag(popHashtag));
            return;
        }
        if (concept.length < 5) {
            dispatch(setHashtag([...concept, tag]));
        }
    };

    return (
        <HashtagSelectContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>컨셉</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'concept' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <HashtagSelectWrapper>
                {availableHashtag.map(hashtag => {
                    return (
                        <HashtagButton
                            key={hashtag}
                            hashtagOption={hashtag}
                            isSelected={concept}
                            onPress={() => onPressHashtag(hashtag)}>
                            {concept.includes(hashtag) ? (
                                <FontBlackSmallerSemibold>{hashtag}</FontBlackSmallerSemibold>
                            ) : (
                                <FontLightGreySmallerMedium>{hashtag}</FontLightGreySmallerMedium>
                            )}
                        </HashtagButton>
                    );
                })}
            </HashtagSelectWrapper>
        </HashtagSelectContainer>
    );
}
