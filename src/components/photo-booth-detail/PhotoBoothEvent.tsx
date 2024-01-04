import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { PhotoBoothEventProps } from 'interfaces/PhotoBoothDetail.interface';
import { PhotoBoothEventContainer, TitleContainer } from 'styles/layout/photo-booth-detail/PhotoBoothEvent.style';
import {
    FontWhiteGreySmallerMedium,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';

import MoreEventModal from './MoreEventModal';
import PhotoBoothEventFrame from './PhotoBoothEventFrame';

export default function PhotoBoothEvent({ eventData }: PhotoBoothEventProps) {
    const [showMoreEventModal, setShowMoreEventModal] = useState(false);

    const onMoreClick = () => {
        setShowMoreEventModal(true);
    };

    const closeModal = () => {
        setShowMoreEventModal(false);
    };

    const onPressButton = () => {
        // 이벤트 보러가기 페이지로 이동
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
                <PhotoBoothEventFrame key={eventData[0].eventID} event={eventData[0]} />
            ) : (
                <>
                    <SearchNoData alertText="등록된 이벤트가 없습니다." recommendText="다른 이벤트를 구경해 보세요!" />
                    <NormalButton text="내 주변 포토부스 보러가기" onPress={onPressButton} />
                </>
            )}

            <MoreEventModal visible={showMoreEventModal} onClose={closeModal} eventData={eventData} />
        </PhotoBoothEventContainer>
    );
}
