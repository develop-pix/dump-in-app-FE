import { setPublicOpen } from 'hooks/redux/reviewNewSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { colors } from 'styles/base/Variable';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';
import { PublicOpenSwitchContainer, PublicOpenToggle } from 'styles/layout/review-form/input/PublicOpenSwitch.style';
import { ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function PublicOpenSwitch() {
    const dispatch = useAppDispatch();
    const publicOpen = useAppSelector(state => state.reviewNew).publicOpen;

    /** Toggle 버튼 클릭시 dispatch */
    const onToggleSwitch = () => {
        dispatch(setPublicOpen(!publicOpen));
    };
    return (
        <PublicOpenSwitchContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>공개허용</FontWhiteNormalMedium>
            </ReviewInputTitleContainer>
            <PublicOpenToggle
                trackColor={{ false: colors.lightgrey, true: colors.yellow }}
                thumbColor={publicOpen ? colors.lightblack : colors.darkgrey}
                ios_backgroundColor={colors.lightgrey}
                onValueChange={onToggleSwitch}
                value={publicOpen}
            />
        </PublicOpenSwitchContainer>
    );
}
