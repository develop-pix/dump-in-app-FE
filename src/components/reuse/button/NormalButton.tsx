import { NormalButtonProps } from 'interfaces/reuse/button/Button.interfaces';
import { NormalButtonContainer } from 'styles/layout/reuse/button/NormalButton.style';
import { FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';

export const NormalButton = ({ text, onPress }: NormalButtonProps) => {
    return (
        <NormalButtonContainer onPress={onPress}>
            <FontWhiteNormalSemibold>{text}</FontWhiteNormalSemibold>
        </NormalButtonContainer>
    );
};
