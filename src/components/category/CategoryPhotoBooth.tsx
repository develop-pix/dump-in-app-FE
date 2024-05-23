import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import SkeletonCategoryPhotoBooth from 'components/reuse/skeleton/SkeletonCategoryPhotoBooth';
import { GetPhotoBoothBrandsList } from 'hooks/axios/Category';
import { PhotoBoothListData } from 'interfaces/Category.interface';
import { CategoryStackScreenProps } from 'interfaces/Navigation.interface';
import {
    CategoryPhotoBoothContainer,
    CategoryPhotoBoothScrollView,
    PhotoBoothItem,
    PhotoBoothListContainer,
    PhotoBoothLogo,
} from 'styles/layout/category/CategoryPhotoBooth.style';
import { FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';

export default function CategoryPhotoBooth() {
    const navigation = useNavigation<CategoryStackScreenProps<'Category'>['navigation']>();
    const isFocused = useIsFocused();

    const [isLoading, setIsLoading] = useState(true);
    const [photoBoothList, setPhotoBoothList] = useState<PhotoBoothListData[]>([]);

    const onPressPhotoBooth = (id: number) => {
        if (isFocused) {
            navigation.navigate('PhotoBoothDetail', {
                photoBoothID: id,
            });
        }
    };

    useEffect(() => {
        const getPhotoBoothBrandsListData = async () => {
            try {
                const photoBoothBrandsList = await GetPhotoBoothBrandsList();
                if (photoBoothBrandsList.data) {
                    setPhotoBoothList(photoBoothBrandsList.data);
                    setIsLoading(prev => !prev);
                }
            } catch (error) {
                console.log('GetPhotoBoothBrandsListError ' + error);
            }
        };

        getPhotoBoothBrandsListData();
    }, []);

    return (
        <>
            {!isLoading ? (
                <CategoryPhotoBoothContainer>
                    <CategoryPhotoBoothScrollView>
                        {photoBoothList.length > 0 ? (
                            <PhotoBoothListContainer>
                                {photoBoothList.map(item => (
                                    <PhotoBoothItem key={item.id} onPress={() => onPressPhotoBooth(item.id)}>
                                        <PhotoBoothLogo source={{ uri: item.logoImageUrl }} />
                                        <FontWhiteSmallerMedium>{item.name}</FontWhiteSmallerMedium>
                                    </PhotoBoothItem>
                                ))}
                            </PhotoBoothListContainer>
                        ) : (
                            <SearchNoData
                                alertText="현재 앱에 등록된 포토부스가 없습니다."
                                recommendText="추후 앱에 포토부스 추가 예정입니다."
                            />
                        )}
                    </CategoryPhotoBoothScrollView>
                </CategoryPhotoBoothContainer>
            ) : (
                <SkeletonCategoryPhotoBooth />
            )}
        </>
    );
}
