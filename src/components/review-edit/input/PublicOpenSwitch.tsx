import { setPublicOpen } from 'hooks/redux/ReviewData';
import { useAppDispatch } from 'hooks/redux/store';
import { PublicOpenSwitchProps } from 'interfaces/ReviewEdit.interface';
import { colors } from 'styles/base/Variable';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';
import { PublicOpenSwitchContainer, PublicOpenToggle } from 'styles/layout/review-form/input/PublicOpenSwitch.style';
import { ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function PublicOpenSwitch({ publicOpen }: PublicOpenSwitchProps) {
    const dispatch = useAppDispatch();

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
