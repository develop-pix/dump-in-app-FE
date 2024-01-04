import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { setDate } from 'hooks/redux/ReviewData';
import { useAppDispatch } from 'hooks/redux/store';
import { DateInputProps } from 'interfaces/ReviewNew.interface';
import {
    FontLightGreyNormalMedium,
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import { DateInputContainer, DateInputWrapper, DateTextButton } from 'styles/layout/review-form/input/DateInput.style';
import { ReviewDescriptionTextInputContainer } from 'styles/layout/review-form/input/ReviewDescriptionInput.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';
import { DateToReviewDateForm } from 'utils/FormChange';

export default function DateInput({ date, errorData }: DateInputProps) {
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onPressDatePickerOpen = () => {
        setDatePickerOpen(true);
    };

    // 취소 버튼을 눌렀을떄
    const onClickCancel = () => {
        setDatePickerOpen(false);
    };

    // 변경 버튼을 눌렀을떄, 날짜 dispatch
    const onClickConfirm = (selectDate: Date) => {
        dispatch(setDate(selectDate));
        setDatePickerOpen(false);
    };

    return (
        <DateInputContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>날짜</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'date' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <ReviewDescriptionTextInputContainer>
                <DateInputWrapper onPress={onPressDatePickerOpen}>
                    <DateTextButton onSelected={date} onPress={onPressDatePickerOpen}>
                        {date ? (
                            <FontWhiteNormalMedium>{DateToReviewDateForm(date)}</FontWhiteNormalMedium>
                        ) : (
                            <FontLightGreyNormalMedium>날짜를 선택해주세요.</FontLightGreyNormalMedium>
                        )}
                    </DateTextButton>
                    <DateTimePickerModal
                        isVisible={datePickerOpen}
                        mode="date"
                        onConfirm={onClickConfirm}
                        onCancel={onClickCancel}
                        locale="ko"
                        cancelTextIOS="취소"
                        confirmTextIOS="변경"
                        maximumDate={new Date()}
                    />
                </DateInputWrapper>
            </ReviewDescriptionTextInputContainer>
        </DateInputContainer>
    );
}
