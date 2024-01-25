import { TouchableOpacity } from 'react-native';

import FillFavoriteIcon from 'assets/image/icon/click_favorite.svg';
import NoFavoriteIcon from 'assets/image/icon/no_favorite.svg';
import { FavoriteButtonProps } from 'interfaces/reuse/button/Button.interfaces';
import { HeartButtonContainer } from 'styles/layout/reuse/button/HeartButton.style';

export default function FavoriteButton({ favorite, onPress }: FavoriteButtonProps) {
    return (
        <>
            {favorite ? (
                <TouchableOpacity onPress={onPress}>
                    <HeartButtonContainer>
                        <FillFavoriteIcon width={24} height={24} />
                    </HeartButtonContainer>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPress}>
                    <HeartButtonContainer>
                        <NoFavoriteIcon width={24} height={24} />
                    </HeartButtonContainer>
                </TouchableOpacity>
            )}
        </>
    );
}
