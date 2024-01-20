import { Platform } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import SearchGreyIcon from 'assets/image/icon/search_grey.svg';
import { MapInputProps } from 'interfaces/Location.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import {
    BlockInput,
    InputForm,
    InputWrapper,
    MapInputContainer,
    MapInputWrapper,
} from 'styles/layout/location/MapInput.style';
import { SearchButtonIconContainer } from 'styles/layout/reuse/input/Search.style';

export default function MapInput({ location }: MapInputProps) {
    const navigation = useNavigation<LocationStackScreenProps<'Location'>['navigation']>();
    const isFocused = useIsFocused();

    const platform = Platform.OS;

    const onPressLocationSearch = () => {
        if (isFocused) {
            navigation.navigate('LocationSearch');
        }
    };

    return (
        <InputWrapper platform={platform}>
            <MapInputContainer>
                <MapInputWrapper
                    activeOpacity={1}
                    onPress={onPressLocationSearch}
                    platform={platform}
                    style={{
                        shadowRadius: 6,
                        shadowOffset: { height: 2, width: 0 },
                        shadowColor: colors.black,
                        shadowOpacity: 0.15,
                    }}>
                    <InputForm>
                        <BlockInput
                            value={location}
                            editable={false}
                            selectTextOnFocus={false}
                            onPressIn={onPressLocationSearch}
                        />
                        <SearchButtonIconContainer>
                            <SearchGreyIcon />
                        </SearchButtonIconContainer>
                    </InputForm>
                </MapInputWrapper>
            </MapInputContainer>
        </InputWrapper>
    );
}
