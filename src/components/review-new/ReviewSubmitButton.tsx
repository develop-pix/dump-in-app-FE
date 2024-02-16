import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { UploadImageToS3, UploadNewReview } from 'hooks/axios/ReviewNew';
import {
    setBranchID,
    setCameraShot,
    setDate,
    setDescription,
    setFrameColor,
    setHairIron,
    setHashtag,
    setImageClear,
    setParty,
    setPublicOpen,
    setRepresentativeImage,
    setTools,
} from 'hooks/redux/ReviewNew';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewSubmitButtonProps } from 'interfaces/ReviewNew.interface';
import { SubmitButton } from 'styles/layout/reuse/button/GoBackButton.style';
import { FontYellowBiggerSemibold } from 'styles/layout/reuse/text/Text.style';

export default function ReviewSubmitButton({ errorData, setErrorData, scrollRef }: ReviewSubmitButtonProps) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        representativeImage,
        image,
        description,
        branchID,
        date,
        frameColor,
        party,
        cameraShot,
        concept,
        tools,
        hairIron,
        publicOpen,
    } = useAppSelector(state => state.reviewNew);

    /** 리뷰업로드가 문제없이 실행됐을 시 redux 초기화 하고 이전페이지로 돌아감 */
    const onPressGoHome = () => {
        dispatch(setRepresentativeImage({ imageURL: undefined, imageName: undefined }));
        dispatch(setImageClear());
        dispatch(setDescription(null));
        dispatch(setBranchID(undefined));
        dispatch(setDate(null));
        dispatch(setFrameColor(null));
        dispatch(setParty(null));
        dispatch(setCameraShot(null));
        dispatch(setHashtag([]));
        dispatch(setTools(null));
        dispatch(setHairIron(null));
        dispatch(setPublicOpen(true));

        navigation.goBack();
    };

    /** 기존 errorData 초기화 및 errorData가 있을경우 추가 */
    const checkErrorData = () => {
        setErrorData([]);

        if (representativeImage.imageURL === undefined) {
            setErrorData(data => [...data, { InputName: 'representativeImage', height: 0 }]);
        }
        if (description === null || description === '') {
            setErrorData(data => [...data, { InputName: 'description', height: 510 }]);
        }
        if (branchID === undefined) {
            setErrorData(data => [...data, { InputName: 'branchID', height: 630 }]);
        }
        if (date === null) {
            setErrorData(data => [...data, { InputName: 'date', height: 630 }]);
        }
        if (frameColor === null) {
            setErrorData(data => [...data, { InputName: 'frameColor', height: 740 }]);
        }
        if (party === null) {
            setErrorData(data => [...data, { InputName: 'party', height: 880 }]);
        }
        if (cameraShot === null) {
            setErrorData(data => [...data, { InputName: 'cameraShot', height: 880 }]);
        }
        if (concept.length === 0) {
            setErrorData(data => [...data, { InputName: 'concept', height: 880 }]);
        }

        if (errorData.length > 0) {
            onErrorScroll(errorData[0].height);
        }
    };

    /** 완료 버튼 클릭시 S3이미지 업로드 및 리뷰 업로드 */
    const onPressSubmit = async () => {
        checkErrorData();

        try {
            let mainThumbnailImageUrl: string | undefined;
            let imageUrls: (string | undefined)[] = [];

            const imageUpload = async () => {
                if (errorData.length === 0) {
                    if (representativeImage.imageURL && representativeImage.imageName) {
                        mainThumbnailImageUrl = await UploadImageToS3(
                            representativeImage.imageURL,
                            representativeImage.imageName,
                        );

                        if (image.length > 0) {
                            const imageUploadPromises = image.map(async imageData => {
                                if (imageData.imageURL && imageData.imageName) {
                                    return await UploadImageToS3(imageData.imageURL, imageData.imageName);
                                }
                            });
                            const updatedImageUrls = await Promise.all(imageUploadPromises);
                            imageUrls = updatedImageUrls.filter(url => url !== undefined);
                        }
                    }
                }
            };

            await imageUpload().then(async () => {
                const errorCheck =
                    mainThumbnailImageUrl &&
                    description &&
                    branchID &&
                    date &&
                    frameColor &&
                    party &&
                    cameraShot &&
                    concept.length > 0;

                if (errorCheck) {
                    await UploadNewReview(
                        mainThumbnailImageUrl,
                        imageUrls,
                        description,
                        branchID,
                        date,
                        frameColor,
                        party,
                        cameraShot,
                        concept,
                        tools,
                        hairIron,
                        publicOpen,
                    );
                    onPressGoHome();
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    /** 완료 버튼 클릭시 입력하지 않은 항목으로 스크롤 이동 */
    const onErrorScroll = useCallback(
        (height: number) => {
            if (scrollRef.current) {
                scrollRef.current.scrollTo({ y: height, animated: true });
            }
        },
        [scrollRef],
    );

    useEffect(() => {
        if (errorData[0]?.height) {
            onErrorScroll(errorData[0].height);
        }
    }, [errorData, onErrorScroll]);

    return (
        <SubmitButton onPress={onPressSubmit}>
            <FontYellowBiggerSemibold>완료</FontYellowBiggerSemibold>
        </SubmitButton>
    );
}
