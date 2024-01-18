import { Platform } from 'react-native';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';

import { setImage, setRepresentativeImage } from 'hooks/redux/ReviewData';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewNewModalProps } from 'interfaces/ReviewNew.interface';
import { FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';
import {
    HorizonLine,
    ReviewNewModalContainer,
    ReviewNewModalWrapper,
    ReviewNewTouchableOpacity,
} from 'styles/layout/review-form/input/ReviewNewModal.style';

export default function ReviewNewModal({ setOpenModal }: ReviewNewModalProps) {
    const dispatch = useDispatch();
    const platform = Platform.OS;
    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;

    /** 카메라 작동 */
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
                    if (representativeImage.imageName || representativeImage.imageURL) {
                        dispatch(
                            setImage([{ imageURL: response.assets[0].uri, imageName: response.assets[0].fileName }]),
                        );
                    } else {
                        dispatch(
                            setRepresentativeImage({
                                imageURL: response.assets[0].uri,
                                imageName: response.assets[0].fileName,
                            }),
                        );
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    /** 앨범에서 선택 */
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
                    selectionLimit: 5,
                },
                response => {
                    if (response.didCancel) {
                        return null;
                    } else if (response.assets) {
                        dispatch(
                            setRepresentativeImage({
                                imageURL: response.assets[0].uri,
                                imageName: response.assets[0].fileName,
                            }),
                        );

                        if (response.assets.length > 1) {
                            response.assets.map(data => {
                                if (data.fileName !== undefined && data.uri !== undefined) {
                                    dispatch(setImage([{ imageURL: data.uri, imageName: data.fileName }]));
                                }
                            });
                        }
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
