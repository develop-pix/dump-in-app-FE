import {TouchableOpacity} from 'react-native';
import React from 'react';
import {FavortiteButtonProps} from '../../../interfaces/reuse/button/Button.interfaces';
import {
  HeartButtonContainer,
  HeartImage,
} from '../../../styles/layout/reuse/button/HeartButton.style';
import FillFavoriteIcon from '../../../assets/image/reuse/fillfavorite.png';
import FavoriteIcon from '../../../assets/image/reuse/favorite.png';

export default function FavoirteButton({
  favorite,
  setFavorite,
}: FavortiteButtonProps) {
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
            <HeartImage source={FillFavoriteIcon} />
          </HeartButtonContainer>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressNoFavorite}>
          <HeartButtonContainer>
            <HeartImage source={FavoriteIcon} />
          </HeartButtonContainer>
        </TouchableOpacity>
      )}
    </>
  );
}
