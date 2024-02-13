import BlackCheckIcon from 'assets/image/icon/check_black.svg';
import EtcCheckImage from 'assets/image/icon/check_frame_etc.svg';
import WhiteCheckIcon from 'assets/image/icon/check_white.svg';
import EtcImage from 'assets/image/icon/frame_etc.svg';
import { setFrameColor } from 'hooks/redux/BranchReviewEdit';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { FrameColorSelectProps } from 'interfaces/ReviewEdit.interface';
import { frameColors } from 'styles/base/Variable';
import {
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    EtcFrameColorButton,
    FrameColorButton,
    FrameColorSelectContainer,
    FrameColorSelectWrapper,
} from 'styles/layout/review-form/input/FrameColorSelect.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function FrameColorSelect({ errorData }: FrameColorSelectProps) {
    const availableColors = Object.values(frameColors);
    const dispatch = useAppDispatch();
    const frameColor = useAppSelector(state => state.branchReviewEdit).frameColor;

    /** 프레임 색상 선택시 dispatch */
    const onPressColor = (color: string) => {
        if (frameColor === color) {
            dispatch(setFrameColor(null));
        } else {
            dispatch(setFrameColor(color));
        }
    };

    return (
        <FrameColorSelectContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>프레임 색상</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'frameColor' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <FrameColorSelectWrapper>
                {availableColors.map(colors => {
                    return (
                        <FrameColorButton
                            key={colors}
                            colorOption={colors}
                            isSelected={frameColor}
                            onPress={() => onPressColor(colors)}>
                            {frameColor === colors ? (
                                frameColor === '#FFFFFF' ? (
                                    <BlackCheckIcon width={24} height={24} />
                                ) : (
                                    <WhiteCheckIcon width={24} height={24} />
                                )
                            ) : null}
                        </FrameColorButton>
                    );
                })}
                <EtcFrameColorButton isSelected={frameColor} onPress={() => onPressColor('gradient')}>
                    {frameColor === 'gradient' ? (
                        <EtcCheckImage width={36} height={36} />
                    ) : (
                        <EtcImage width={36} height={36} />
                    )}
                </EtcFrameColorButton>
            </FrameColorSelectWrapper>
        </FrameColorSelectContainer>
    );
}
