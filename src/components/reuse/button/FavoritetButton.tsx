import { TouchableOpacity } from 'react-native';

import FillFavoriteIcon from '../../../assets/image/icon/click_favorite.svg';
import NoFavoriteIcon from '../../../assets/image/icon/no_favorite.svg';
import { FavortiteButtonProps } from '../../../interfaces/reuse/button/Button.interfaces';
import { HeartButtonContainer } from '../../../styles/layout/reuse/button/HeartButton.style';

export default function FavoirteButton({ favorite, setFavorite }: FavortiteButtonProps) {
    const onPressFavorite = () => {
        setFavorite(false);
    };

    const onPressNoFavorite = () => {
        setFavorite(true);
    };

    return (
        <>
            {favorite ? (
                <TouchableOpacity onPress={onPressFavorite}>
                    <HeartButtonContainer>
                        <FillFavoriteIcon width={24} height={24} />
                    </HeartButtonContainer>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPressNoFavorite}>
                    <HeartButtonContainer>
                        <NoFavoriteIcon width={24} height={24} />
                    </HeartButtonContainer>
                </TouchableOpacity>
            )}
        </>
    );
}
