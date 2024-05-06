import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import CloseIcon from 'assets/image/icon/btn_close.svg';
import SkeletonGetMoreMyPageEvent from 'components/reuse/skeleton/SkeletonGetMoreMyPageEvent';
import { GetPhotoBoothEventList } from 'hooks/axios/PhotoBoothBrand';
import { CategoryStackScreenProps } from 'interfaces/Navigation.interface';
import { EventDataType, MoreEventModalProps } from 'interfaces/PhotoBoothDetail.interface';
import {
    CloseButtonContainer,
    MoreEventModalContainer,
    TitleContainer,
} from 'styles/layout/photo-booth-detail/MoreEventModal.style';
import { FontWhiteGreyNormalSemibold } from 'styles/layout/reuse/text/Text.style';

import PhotoBoothEventFrame from './PhotoBoothEventFrame';

export default function MoreEventModal({ dataLimit, page, setPage, visible, onClose }: MoreEventModalProps) {
    const route = useRoute<CategoryStackScreenProps<'PhotoBoothDetail'>['route']>();
    const navigation = useNavigation<CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']>();
    const isFocused = useIsFocused();

    const [allEventData, setAllEventData] = useState<EventDataType[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    /** EventDetail 페이지로 이동 */
    const onPressEvent = (id: number) => {
        if (isFocused) {
            navigation.navigate('EventDetail', {
                eventID: id,
            });
        }
        onClose();
    };
    /** FlatList onEndReached */
    const onEndReached = async () => {
        setPage(prev => prev + 1);
        const newData = await GetPhotoBoothEventList(dataLimit, page, route.params.photoBoothID);

        setAllEventData(prevData => [...prevData, ...newData.data.results]);
        newData.data.next !== null && setDataEnd(prev => !prev);
    };

    /** FlatList renderItem */
    const renderEventItem = useCallback(({ item }: { item: EventDataType }) => {
        return (
            <TouchableOpacity onPress={() => onPressEvent(item.id)}>
                <PhotoBoothEventFrame event={item} />
            </TouchableOpacity>
        );
    }, []);

    // 포토부스 상세 페이지 진입시 해당 포토부스의 데이터, 이벤트, 리뷰 Get
    useEffect(() => {
        const getPhotoBoothData = async () => {
            try {
                const photoBoothBrandEventData = await GetPhotoBoothEventList(
                    dataLimit,
                    page,
                    route.params.photoBoothID,
                );

                if (photoBoothBrandEventData.data) {
                    setAllEventData(photoBoothBrandEventData.data.results);
                    photoBoothBrandEventData.data.next !== null && setDataEnd(prev => !prev);
                }
            } catch (error) {
                console.log('GetPhotoBoothBrandsListError ' + error);
            }
        };

        getPhotoBoothData();
    }, [dataLimit, route.params.photoBoothID]);

    return (
        <Modal
            isVisible={visible}
            style={{ margin: 0, marginBottom: 90, justifyContent: 'flex-end' }}
            backdropOpacity={0.7}
            onBackdropPress={onClose}>
            <MoreEventModalContainer>
                <TitleContainer>
                    <FontWhiteGreyNormalSemibold>이벤트 전체보기</FontWhiteGreyNormalSemibold>
                    <CloseButtonContainer onPress={onClose}>
                        <CloseIcon />
                    </CloseButtonContainer>
                </TitleContainer>

                {dataEnd ? (
                    <FlatList
                        data={allEventData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderEventItem}
                    />
                ) : (
                    <FlatList
                        data={allEventData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderEventItem}
                        onEndReached={onEndReached}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={<SkeletonGetMoreMyPageEvent />}
                    />
                )}
            </MoreEventModalContainer>
        </Modal>
    );
}
