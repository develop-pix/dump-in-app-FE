import React from 'react';
import { Platform } from 'react-native';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';

import { setRepresentativeImage, setRepresentativeImageName } from '../../../hooks/redux/ReviewData';
import { ReviewNewModalProps } from '../../../interfaces/ReviewNew.interface';
import { FontWhiteNormalSemibold } from '../../../styles/layout/reuse/text/Text.style';
import {
    HorizonLine,
    ReviewNewModalContainer,
    ReviewNewModalWrapper,
    ReviewNewTouchableOpacity,
} from '../../../styles/layout/review-form/input/ReviewNewModal.style';

export default function ReviewNewModal({ setOpenModal }: ReviewNewModalProps) {
    const platform = Platform.OS;
    const dispatch = useDispatch();

    const onPressCameraOpen = async () => {
        setOpenModal(false);
        //ios emulator 에서는 카메라를 지원하지 않으므로 오류 발생
        try {
            const cameraOption: CameraOptions = {
                mediaType: 'photo',
                cameraType: 'back',
                saveToPhotos: true,
                quality: 1,
                maxHeight: 450,
                maxWidth: 600,
                includeBase64: false,
            };
            await launchCamera(cameraOption, response => {
                if (response.didCancel) {
                    return null;
                } else if (response.assets) {
                    dispatch(setRepresentativeImage(response.assets[0].uri));
                    dispatch(setRepresentativeImageName(response.assets[0].fileName));
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onPressGalleryOpen = async () => {
        setOpenModal(false);
        try {
            await launchImageLibrary(
                {
                    mediaType: 'photo',
                    maxWidth: 450,
                    maxHeight: 600,
                    quality: 1,
                    includeBase64: false,
                },
                response => {
                    if (response.didCancel) {
                        return null;
                    } else if (response.assets) {
                        console.log(response.assets[0]);
                        dispatch(setRepresentativeImage(response.assets[0].uri));
                        dispatch(setRepresentativeImageName(response.assets[0].fileName));
                    }
                },
            );
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Modal
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}
            isVisible={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.7}
            coverScreen={false}
            propagateSwipe={false}
            onBackdropPress={() => {
                setOpenModal(false);
            }}
            onBackButtonPress={() => {
                setOpenModal(false);
            }}>
            <ReviewNewModalContainer platform={platform}>
                <ReviewNewModalWrapper>
                    <ReviewNewTouchableOpacity onPress={onPressCameraOpen}>
                        <FontWhiteNormalSemibold>사진 촬영하기</FontWhiteNormalSemibold>
                    </ReviewNewTouchableOpacity>
                    <HorizonLine />
                    <ReviewNewTouchableOpacity onPress={onPressGalleryOpen}>
                        <FontWhiteNormalSemibold>갤러리 항목 선택</FontWhiteNormalSemibold>
                    </ReviewNewTouchableOpacity>
                </ReviewNewModalWrapper>
            </ReviewNewModalContainer>
        </Modal>
    );
}
