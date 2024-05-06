import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { CategoryStackScreenProps, HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { PhotoBoothEventProps } from 'interfaces/PhotoBoothDetail.interface';
import { PhotoBoothEventContainer, TitleContainer } from 'styles/layout/photo-booth-detail/PhotoBoothEvent.style';
import {
    FontWhiteGreySmallerMedium,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';

import MoreEventModal from './MoreEventModal';
import PhotoBoothEventFrame from './PhotoBoothEventFrame';

export default function PhotoBoothEvent({ dataLimit, page, setPage, eventData }: PhotoBoothEventProps) {
    const route = useRoute<
        HomeStackScreenProps<'PhotoBoothDetail'>['route'] | CategoryStackScreenProps<'PhotoBoothDetail'>['route']
    >();
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const isFocused = useIsFocused();

    const [showMoreEventModal, setShowMoreEventModal] = useState(false);

    /** 이벤트 모달 Open */
    const onMoreClick = () => {
        setShowMoreEventModal(true);
    };

    /** 이벤트 모달 Close */
    const closeModal = () => {
        setShowMoreEventModal(false);
    };

    /** 내 주변 포토부스 보럭가기 버튼 클릭시 Location tab으로 이동  */
    const onPressButton = () => {
        if (isFocused) {
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('MainTab', {
                        screen: 'LocationTab',
                        params: {
                            screen: 'Location',
                            params: { photoBoothID: route.params.photoBoothID },
                        },
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('MainTab', {
                        screen: 'LocationTab',
                        params: {
                            screen: 'Location',
                            params: { photoBoothID: route.params.photoBoothID },
                        },
                    });
                    break;
            }
        }
    };

    return (
        <PhotoBoothEventContainer>
            <TitleContainer>
                <FontWhiteSmallerSemiboldWithLineSpacing>EVENT</FontWhiteSmallerSemiboldWithLineSpacing>
                {eventData.length > 1 && (
                    <TouchableOpacity onPress={onMoreClick}>
                        <FontWhiteGreySmallerMedium>더보기</FontWhiteGreySmallerMedium>
                    </TouchableOpacity>
                )}
            </TitleContainer>

            {eventData.length > 0 ? (
                <PhotoBoothEventFrame key={eventData[0].id} event={eventData[0]} />
            ) : (
                <>
                    <SearchNoData alertText="등록된 이벤트가 없습니다." recommendText="다른 이벤트를 구경해 보세요!" />
                    <NormalButton text="내 주변 포토부스 보러가기" onPress={onPressButton} />
                </>
            )}

            <MoreEventModal
                dataLimit={dataLimit}
                page={page}
                setPage={setPage}
                visible={showMoreEventModal}
                onClose={closeModal}
            />
        </PhotoBoothEventContainer>
    );
}
