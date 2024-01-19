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

export default function ReviewNewModal({
    setEnlargedImage,
    setOpenModal,
    limitImage,
    setLimitImage,
}: ReviewNewModalProps) {
    const dispatch = useDispatch();
    const platform = Platform.OS;
    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;
    const image = useAppSelector(state => state.reviewData).image;

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
                        setLimitImage(prev => prev - 1);
                    } else {
                        dispatch(
                            setRepresentativeImage({
                                imageURL: response.assets[0].uri,
                                imageName: response.assets[0].fileName,
                            }),
                        );
                        setEnlargedImage({ imageURL: response.assets[0].uri, imageName: response.assets[0].fileName });
                        setLimitImage(prev => prev - 1);
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
                    selectionLimit: limitImage,
                },
                response => {
                    if (response.didCancel) {
                        return null;
                    } else if (response.assets) {
                        /** 중복된 이미지 제거 */
                        //FIXME: ios 시뮬레이터에서는 fileName이 변경되므로 추후 수정이 필요할듯함.
                        //FIXME: 또한 현재 기준 두 플랫폼 모두 파일이름 기준으로 중복 체크 할 시 우연히 두 파일 이름이 같을수 있으므로 수정이 필요하다고 생각됨.
                        const deduplicatedAssets = response.assets?.filter(asset => {
                            if (
                                representativeImage.imageName !== asset.fileName &&
                                image.every(imageData => imageData.imageName !== asset.fileName)
                            ) {
                                return asset;
                            }
                        });
                        if (representativeImage.imageURL === undefined && representativeImage.imageName === undefined) {
                            dispatch(
                                setRepresentativeImage({
                                    imageURL: response.assets[0].uri,
                                    imageName: response.assets[0].fileName,
                                }),
                            );
                            setLimitImage(prev => prev - 1);
                            setEnlargedImage({
                                imageURL: response.assets[0].uri,
                                imageName: response.assets[0].fileName,
                            });

                            deduplicatedAssets.map((data, index) => {
                                if (data.fileName !== undefined && data.uri !== undefined && index !== 0) {
                                    dispatch(setImage([{ imageURL: data.uri, imageName: data.fileName }]));
                                    setLimitImage(prev => prev - 1);
                                }
                            });
                        } else {
                            deduplicatedAssets.map(data => {
                                if (data.fileName !== undefined && data.uri !== undefined) {
                                    dispatch(setImage([{ imageURL: data.uri, imageName: data.fileName }]));
                                    setLimitImage(prev => prev - 1);
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
