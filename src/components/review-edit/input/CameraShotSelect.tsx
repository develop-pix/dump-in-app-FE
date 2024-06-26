import { setCameraShot } from 'hooks/redux/reviewEditSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { CameraShotSelectProps } from 'interfaces/ReviewEdit.interface';
import {
    FontRedNormalMedium,
    FontWhiteGreySmallerMedium,
    FontWhiteNormalMedium,
    FontWhiteSmallerSemibold,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    CameraShotButton,
    CameraShotImage,
    CameraShotSelectContainer,
    CameraShotSelectWrapper,
    CameraShotTextContainer,
} from 'styles/layout/review-form/input/CameraShot.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function CameraShotSelect({ errorData }: CameraShotSelectProps) {
    const dispatch = useAppDispatch();
    const cameraShot = useAppSelector(state => state.reviewEdit).cameraShot;
    const availableCameraShot = [
        {
            name: '클로즈업',
            image: require('assets/image/source/filter-close-up.png'),
        },
        {
            name: '상반신',
            image: require('assets/image/source/filter-bust.png'),
        },
        {
            name: '무릎',
            image: require('assets/image/source/filter-knee.png'),
        },
        {
            name: '전신',
            image: require('assets/image/source/filter-whole-body.png'),
        },
    ];

    /** 카메라샷 선택시 dispatch */
    const onPressCameraShotImage = (cameraShotName: string) => {
        if (cameraShotName === cameraShot) {
            dispatch(setCameraShot(null));
        } else {
            dispatch(setCameraShot(cameraShotName));
        }
    };
    return (
        <CameraShotSelectContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>카메라 샷</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'cameraShot' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <CameraShotSelectWrapper>
                {availableCameraShot.map(cameraShotData => {
                    return (
                        <CameraShotButton
                            key={cameraShotData.name}
                            currentImage={cameraShotData.name}
                            selectedImage={cameraShot}
                            onPress={() => onPressCameraShotImage(cameraShotData.name)}>
                            <CameraShotImage
                                currentImage={cameraShotData.name}
                                selectedImage={cameraShot}
                                source={cameraShotData.image}
                            />
                            <CameraShotTextContainer>
                                {cameraShot === cameraShotData.name ? (
                                    <FontWhiteSmallerSemibold>{cameraShotData.name}</FontWhiteSmallerSemibold>
                                ) : (
                                    <FontWhiteGreySmallerMedium>{cameraShotData.name}</FontWhiteGreySmallerMedium>
                                )}
                            </CameraShotTextContainer>
                        </CameraShotButton>
                    );
                })}
            </CameraShotSelectWrapper>
        </CameraShotSelectContainer>
    );
}
