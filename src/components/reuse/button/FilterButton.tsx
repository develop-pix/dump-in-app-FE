import { FilterButtonProps } from 'interfaces/reuse/button/Button.interfaces';
import { FilterButtonContainer, FilterButtonText } from 'styles/layout/reuse/button/FilterButton.style';

export const FilterButton = ({
    onPress,
    text,
    backgroundColor,
    borderColor,
    textColor,
    disabled,
}: FilterButtonProps) => {
    return (
        <FilterButtonContainer
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            onPress={onPress}
            disabled={disabled}>
            <FilterButtonText textColor={textColor}>{text}</FilterButtonText>
        </FilterButtonContainer>
    );
};
