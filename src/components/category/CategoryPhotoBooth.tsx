import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import SkeletonCategoryPhotoBooth from 'components/reuse/skeleton/SkeletonCategoryPhotoBooth';
import { RootStackParam } from 'interfaces/NavigationBar';
import {
    CategoryPhotoBoothContainer,
    PhotoBoothItem,
    PhotoBoothLogo,
} from 'styles/layout/category/CategoryPhotoBooth.style';
import { FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';

export default function CategoryPhotoBooth() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onPressPhotoBooth = (id: number) => {
        if (isFocused) {
            navigation.navigate('PhotoBoothDetail', {
                PhotoBoothID: id,
            });
        }
    };

    const [photoBoothTempData, setPhotoBoothTempData] = useState(() =>
        Array(24)
            .fill(null)
            .map((_, index) => ({
                photoBoothID: index + 1,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                photoBoothName: '포토그레이',
            })),
    );

    useEffect(() => {
        // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {!isLoading ? (
                <ScrollView>
                    {photoBoothTempData.length > 0 ? (
                        <CategoryPhotoBoothContainer>
                            {photoBoothTempData.map(item => (
                                <PhotoBoothItem
                                    key={item.photoBoothID}
                                    onPress={() => onPressPhotoBooth(item.photoBoothID)}>
                                    <PhotoBoothLogo source={{ uri: item.representativeImage }} />
                                    <FontWhiteSmallerMedium>{item.photoBoothName}</FontWhiteSmallerMedium>
                                </PhotoBoothItem>
                            ))}
                        </CategoryPhotoBoothContainer>
                    ) : (
                        <SearchNoData
                            alertText="현재 앱에 등록된 포토부스가 없습니다."
                            recommendText="추후 앱에 포토부스 추가 예정입니다."
                        />
                    )}
                </ScrollView>
            ) : (
                <SkeletonCategoryPhotoBooth />
            )}
        </>
    );
}
