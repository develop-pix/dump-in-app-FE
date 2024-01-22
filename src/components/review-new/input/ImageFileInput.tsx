import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import ButtonAddImage from 'assets/image/icon/btn_add.svg';
import TrashIcon from 'assets/image/icon/btn_trash.svg';
import { setEnlargedImage, setImage, setRemoveImage, setRepresentativeImage } from 'hooks/redux/ReviewData';
import { useAppSelector } from 'hooks/redux/store';
import { ImageFileInputProps } from 'interfaces/ReviewNew.interface';
import { colors } from 'styles/base/Variable';
import {
    FontRedNormalMedium,
    FontWhiteGreySmallestMediumWithLineHeight,
    FontYellowMiniMedium,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    AddImageContainer,
    EnlargedImageContainer,
    EnlargedPreviewImage,
    EnlargedPreviewImageContainer,
    EnlargedRepresentativeTitleContainer,
    ImageFileInputContainer,
    ImagesContainer,
    ImageUploadButton,
    ImageUploadButtonContainer,
    NoDataImageContainer,
    PreviewImage,
    PreviewImageButton,
    PreviewImagesContainer,
    PreviewNoImage,
    PreviewRepresentativeImage,
    RepresentativeTitleContainer,
    ReviewErrorContainerFileInput,
    TrashButton,
    TrashButtonContainer,
} from 'styles/layout/review-form/input/ImageFileInput.style';

export default function ImageFileInput({ setOpenModal, errorData, setLimitImage }: ImageFileInputProps) {
    const dispatch = useDispatch();
    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;
    const image = useAppSelector(state => state.reviewData).image;
    const enlargedImage = useAppSelector(state => state.reviewData).enlargedImage;

    /** 카메라, 앨범 에서 선택 모달 Open */
    const onPressImageUpload = () => {
        setOpenModal(true);
    };

    /** 대표사진 교체 */
    const onPressSetRepresentativeImage = (imageURL: string | undefined, imageName: string | undefined) => {
        dispatch(setImage([{ imageURL: representativeImage.imageURL, imageName: representativeImage.imageName }]));
        dispatch(setRepresentativeImage({ imageURL, imageName }));
        dispatch(setRemoveImage({ imageURL, imageName }));
    };

    /** 이미지 삭제 */
    const onPressDeleteImage = (imageURL: string | undefined, imageName: string | undefined) => {
        dispatch(setRemoveImage({ imageURL, imageName }));
        dispatch(
            setEnlargedImage({ imageURL: representativeImage.imageURL, imageName: representativeImage.imageName }),
        );
        setLimitImage(prev => prev + 1);
    };

    const onPressEnlargeImage = (imageURL: string | undefined, imageName: string | undefined) => {
        dispatch(setEnlargedImage({ imageURL, imageName }));
    };

    return (
        <ImageFileInputContainer>
            <EnlargedImageContainer>
                {representativeImage.imageURL === undefined ? (
                    <NoDataImageContainer onPress={onPressImageUpload} activeOpacity={0.8}>
                        <PreviewNoImage>
                            <ButtonAddImage width={17} height={17} />
                        </PreviewNoImage>
                    </NoDataImageContainer>
                ) : (
                    <EnlargedPreviewImageContainer>
                        <EnlargedPreviewImage source={{ uri: enlargedImage.imageURL }} />
                        {enlargedImage.imageURL !== representativeImage.imageURL ? (
                            <TrashButtonContainer>
                                <TrashButton
                                    onPress={() => onPressDeleteImage(enlargedImage.imageURL, enlargedImage.imageName)}>
                                    <TrashIcon width={24} height={24} />
                                </TrashButton>
                            </TrashButtonContainer>
                        ) : (
                            <EnlargedRepresentativeTitleContainer>
                                <FontYellowMiniMedium>대표</FontYellowMiniMedium>
                            </EnlargedRepresentativeTitleContainer>
                        )}
                    </EnlargedPreviewImageContainer>
                )}

                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0, 1]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 150,
                    }}
                />
                {errorData.map(data => {
                    return data.InputName === 'representativeImage' ? (
                        <ReviewErrorContainerFileInput key={data.InputName}>
                            <FontRedNormalMedium>*</FontRedNormalMedium>
                            <FontYellowSmallestMedium>필수 등록 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainerFileInput>
                    ) : null;
                })}
                <ImageUploadButtonContainer>
                    {representativeImage.imageURL === undefined ? (
                        <ImageUploadButton activeOpacity={0.7} onPress={onPressImageUpload}>
                            <FontWhiteGreySmallestMediumWithLineHeight>
                                사진을 등록해주세요
                            </FontWhiteGreySmallestMediumWithLineHeight>
                        </ImageUploadButton>
                    ) : representativeImage.imageURL !== enlargedImage.imageURL ? (
                        <ImageUploadButton
                            activeOpacity={0.7}
                            onPress={() =>
                                onPressSetRepresentativeImage(enlargedImage.imageURL, enlargedImage.imageName)
                            }>
                            <FontWhiteGreySmallestMediumWithLineHeight>
                                대표이미지로 설정
                            </FontWhiteGreySmallestMediumWithLineHeight>
                        </ImageUploadButton>
                    ) : null}
                </ImageUploadButtonContainer>
            </EnlargedImageContainer>
            <ImagesContainer>
                <PreviewImagesContainer>
                    {representativeImage.imageURL !== undefined ? (
                        <PreviewImageButton
                            onPress={() =>
                                onPressEnlargeImage(representativeImage.imageURL, representativeImage.imageName)
                            }>
                            <PreviewRepresentativeImage source={{ uri: representativeImage.imageURL }} />
                            <RepresentativeTitleContainer>
                                <FontYellowMiniMedium>대표</FontYellowMiniMedium>
                            </RepresentativeTitleContainer>
                        </PreviewImageButton>
                    ) : null}
                    {image.map(imageData => (
                        <PreviewImageButton
                            key={imageData.imageURL}
                            onPress={() => onPressEnlargeImage(imageData.imageURL, representativeImage.imageName)}>
                            <PreviewImage source={{ uri: imageData.imageURL }} />
                        </PreviewImageButton>
                    ))}
                    {image.length < 4 ? (
                        <AddImageContainer onPress={onPressImageUpload}>
                            <ButtonAddImage width={14} height={14} />
                        </AddImageContainer>
                    ) : null}
                </PreviewImagesContainer>
            </ImagesContainer>
        </ImageFileInputContainer>
    );
}
