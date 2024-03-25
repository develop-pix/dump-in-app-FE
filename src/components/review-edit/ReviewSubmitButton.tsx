import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { UploadEditReview } from 'hooks/axios/ReviewEdit';
import { UploadImageToS3 } from 'hooks/axios/ReviewNew';
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
} from 'hooks/redux/reviewEditSlice';
import { useAppSelector } from 'hooks/redux/store';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { ReviewSubmitButtonProps } from 'interfaces/ReviewEdit.interface';
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
    } = useAppSelector(state => state.reviewEdit);
    const userID = useAppSelector(state => state.userData).userID;
    const route = useRoute<LocationStackScreenProps<'ReviewDetail'>['route']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    /** 리뷰 수정이 문제없이 실행됐을 시 redux 초기화 하고 이전페이지로 돌아감 */
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
    };

    /** 완료 버튼 클릭시 S3이미지 업로드 및 리뷰 수정 */
    const onPressSubmit = async () => {
        checkErrorData();

        try {
            let imageUrls: (string | undefined)[] = image
                .map(data => {
                    if (data.imageName === undefined) {
                        return data.imageURL;
                    }
                })
                .filter(url => url !== undefined);

            if (errorData.length === 0) {
                const imageUpload = async () => {
                    if (representativeImage.imageURL && representativeImage.imageName && userID) {
                        await UploadImageToS3(representativeImage.imageURL, representativeImage.imageName, userID);
                    }

                    if (image.length > 0) {
                        const imageUploadPromises = image.map(async imageData => {
                            if (imageData.imageURL && imageData.imageName && userID) {
                                return await UploadImageToS3(imageData.imageURL, imageData.imageName, userID);
                            }
                        });
                        const updatedImageUrls = await Promise.all(imageUploadPromises);
                        imageUrls = imageUrls.concat(updatedImageUrls.filter(url => url !== undefined));
                    }
                };

                await imageUpload().then(async () => {
                    const errorCheck =
                        isLoggedIn &&
                        representativeImage.imageURL &&
                        description &&
                        branchID &&
                        date &&
                        frameColor &&
                        party &&
                        cameraShot &&
                        concept.length > 0;

                    if (errorCheck) {
                        await UploadEditReview(
                            route.params.reviewID,
                            representativeImage.imageURL,
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
            }
        } catch (e) {
            console.log(e);
        }
    };

    /** 완료 버튼 클릭시 입력하지 않은 항목으로 스크롤 이동 */
    useEffect(() => {
        const onErrorScroll = (height: number) => {
            if (scrollRef.current && errorData[0].height) {
                scrollRef.current.scrollTo({ y: height, animated: true });
            }
        };

        if (errorData.length) {
            onErrorScroll(errorData[0].height);
        }
    }, [errorData, scrollRef]);

    return (
        <SubmitButton onPress={onPressSubmit}>
            <FontYellowBiggerSemibold>완료</FontYellowBiggerSemibold>
        </SubmitButton>
    );
}
