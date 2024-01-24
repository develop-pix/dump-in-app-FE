import { setParty } from 'hooks/redux/ReviewData';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { PartySelectProps } from 'interfaces/ReviewNew.interface';
import {
    FontBlackSmallerSemibold,
    FontLightGreySmallerMedium,
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    PartyButton,
    PartySelectContainer,
    PartySelectWrapper,
} from 'styles/layout/review-form/input/PartySelect.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function PartySelect({ errorData }: PartySelectProps) {
    const availableParty: number[] = [1, 2, 3, 4, 5];
    const dispatch = useAppDispatch();
    const party = useAppSelector(state => state.reviewData).party;

    /** 인원 선택시 dispatch */
    const onPressParty = (partyNumber: number) => {
        if (party === partyNumber) {
            dispatch(setParty(null));
        } else {
            dispatch(setParty(partyNumber));
        }
    };

    return (
        <PartySelectContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>인원</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'party' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <PartySelectWrapper>
                {availableParty.map((partyOption: number) => {
                    return (
                        <PartyButton
                            partyOption={partyOption}
                            isSelected={party}
                            key={partyOption}
                            onPress={() => onPressParty(partyOption)}>
                            {partyOption === party ? (
                                <FontBlackSmallerSemibold>
                                    {partyOption === 5 ? '5+' : partyOption}
                                </FontBlackSmallerSemibold>
                            ) : (
                                <FontLightGreySmallerMedium>
                                    {partyOption === 5 ? '5+' : partyOption}
                                </FontLightGreySmallerMedium>
                            )}
                        </PartyButton>
                    );
                })}
            </PartySelectWrapper>
        </PartySelectContainer>
    );
}
