import { View } from 'react-native';

import BlackCheckIcon from 'assets/image/icon/check_black.svg';
import EtcCheckImage from 'assets/image/icon/check_frame_etc.svg';
import WhiteCheckIcon from 'assets/image/icon/check_white.svg';
import EtcImage from 'assets/image/icon/frame_etc.svg';
import { FilterDataUpdateProps } from 'interfaces/reuse/Filter.interface';
import { frameColors } from 'styles/base/Variable';
import { FilterContentContainer, FilterLabelContainer } from 'styles/layout/home/filter/Filter.style';
import { EtcFrameColorButton, FrameColorButton } from 'styles/layout/home/filter/FilterFrameColor.style';
import { FontWhiteGreySmallerSemibold } from 'styles/layout/reuse/text/Text.style';

const availableColors = Object.values(frameColors);

export default function FilterFrameColor({ filterData, setFilterData, filterOptionSelect }: FilterDataUpdateProps) {
    const handleColorToggle = (color: string) => {
        const isSelected = filterData.frameColor === color;

        setFilterData(prevFilterData => ({
            ...prevFilterData,
            frameColor: isSelected ? '' : color,
        }));

        filterOptionSelect();
    };

    return (
        <View>
            <FilterLabelContainer>
                <FontWhiteGreySmallerSemibold>프레임 색상</FontWhiteGreySmallerSemibold>
            </FilterLabelContainer>
            <FilterContentContainer>
                {availableColors.map(colorOption => {
                    const isSelected = filterData.frameColor === colorOption;

                    return (
                        <FrameColorButton
                            key={colorOption}
                            isSelected={isSelected}
                            colorOption={colorOption}
                            selectedColor={filterData.frameColor}
                            onPress={() => handleColorToggle(colorOption)}>
                            {isSelected &&
                                (colorOption === frameColors.white ? (
                                    <BlackCheckIcon width={24} height={24} />
                                ) : (
                                    <WhiteCheckIcon width={24} height={24} />
                                ))}
                        </FrameColorButton>
                    );
                })}
                <EtcFrameColorButton
                    isSelected={filterData.frameColor === 'etc'}
                    selectedColor={filterData.frameColor}
                    onPress={() => handleColorToggle('etc')}>
                    {filterData.frameColor === 'etc' ? (
                        <EtcCheckImage width={36} height={36} />
                    ) : (
                        <EtcImage width={36} height={36} />
                    )}
                </EtcFrameColorButton>
            </FilterContentContainer>
        </View>
    );
}
