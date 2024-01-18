import LinearGradient from 'react-native-linear-gradient';

import ButtonAddImage from 'assets/image/icon/btn_add.svg';
import { useAppSelector } from 'hooks/redux/store';
import { ImageFileInputProps } from 'interfaces/ReviewNew.interface';
import { colors } from 'styles/base/Variable';
import {
    FontRedNormalMedium,
    FontWhiteGreySmallestMediumWithLineHeight,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    ImageFileInputContainer,
    ImageUploadButton,
    ImageUploadButtonContainer,
    NoDataImageContainer,
    PreviewImage,
    PreviewImageContainer,
    PreviewNoImage,
    ReviewErrorContainerFileInput,
} from 'styles/layout/review-form/input/ImageFileInput.style';

export default function ImageFileInput({ setOpenModal, errorData }: ImageFileInputProps) {
    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;
    const onPressImageUpload = () => {
        setOpenModal(true);
    };

    return (
        <ImageFileInputContainer>
            {representativeImage === null ? (
                <NoDataImageContainer onPress={onPressImageUpload} activeOpacity={0.8}>
                    <PreviewNoImage>
                        <ButtonAddImage width={17} height={17} />
                    </PreviewNoImage>
                </NoDataImageContainer>
            ) : (
                <PreviewImageContainer>
                    <PreviewImage source={{ uri: representativeImage.imageURL }} />
                </PreviewImageContainer>
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
                <ImageUploadButton activeOpacity={0.7} onPress={onPressImageUpload}>
                    <FontWhiteGreySmallestMediumWithLineHeight>
                        {representativeImage === null ? '사진을 등록해주세요.' : '대표이미지로 설정'}
                    </FontWhiteGreySmallestMediumWithLineHeight>
                </ImageUploadButton>
            </ImageUploadButtonContainer>
        </ImageFileInputContainer>
    );
}
