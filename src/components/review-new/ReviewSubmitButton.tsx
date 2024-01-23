import { useEffect } from 'react';
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
} from 'hooks/redux/ReviewData';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewSubmitButtonProps } from 'interfaces/ReviewNew.interface';
import { SubmitButton } from 'styles/layout/reuse/button/GoBackButton.style';
import { FontYellowBiggerSemibold } from 'styles/layout/reuse/text/Text.style';

export default function ReviewSubmitButton({ errorData, setErrorData, scrollRef }: ReviewSubmitButtonProps) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;
    const image = useAppSelector(state => state.reviewData).image;
    const description = useAppSelector(state => state.reviewData).description;
    const location = useAppSelector(state => state.reviewData).branchID;
    const date = useAppSelector(state => state.reviewData).date;
    const frameColor = useAppSelector(state => state.reviewData).frameColor;
    const party = useAppSelector(state => state.reviewData).party;
    const cameraShot = useAppSelector(state => state.reviewData).cameraShot;
    const hashtags = useAppSelector(state => state.reviewData).hashtag;
    const tools = useAppSelector(state => state.reviewData).tools;
    const hairIron = useAppSelector(state => state.reviewData).hairIron;
    const publicOpen = useAppSelector(state => state.reviewData).publicOpen;

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
    const CheckErrorData = () => {
        setErrorData([]);

        if (representativeImage.imageURL === undefined) {
            setErrorData(data => [...data, { InputName: 'representativeImage', height: 0 }]);
        }
        if (description === null || description === '') {
            setErrorData(data => [...data, { InputName: 'description', height: 510 }]);
        }
        if (location === null || location === undefined) {
            setErrorData(data => [...data, { InputName: 'location', height: 630 }]);
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
        if (hashtags.length === 0) {
            setErrorData(data => [...data, { InputName: 'hashtags', height: 880 }]);
        }

        if (errorData.length > 0) {
            onErrorScroll(errorData[0].height);
        }
    };

    /** 완료 버튼 클릭시 S3이미지 업로드 및 리뷰 업로드 */
    const onPressSubmit = async () => {
        CheckErrorData();

        try {
            let mainThumbnailImageUrl: string | undefined;
            let imageUrls: (string | undefined)[] = [];

            const ImageUpload = async () => {
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

            await ImageUpload().then(async () => {
                const errorCheck =
                    mainThumbnailImageUrl &&
                    description &&
                    location &&
                    date &&
                    frameColor &&
                    party &&
                    cameraShot &&
                    hashtags.length > 0 &&
                    tools !== null &&
                    hairIron !== null;

                if (errorCheck) {
                    await UploadNewReview(
                        mainThumbnailImageUrl,
                        imageUrls,
                        description,
                        location,
                        date,
                        frameColor,
                        party,
                        cameraShot,
                        hashtags,
                        tools,
                        hairIron,
                        publicOpen,
                    );
                    //작성완료시 redux 비워야함
                    onPressGoHome();
                }
            });
        } catch (e) {
            console.log(e);
        }
        // TODO: 리뷰 모달 클로즈 , 아래 뒤로가기 버튼 클릭시 닫겠습니까 모달 출력
    };

    /** 완료 버튼 클릭시 입력하지 않은 부분 스크롤 이동 */
    const onErrorScroll = (height: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: height, animated: true });
        }
    };

    useEffect(() => {
        if (errorData[0]) {
            onErrorScroll(errorData[0].height);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorData[0]]);

    return (
        <SubmitButton onPress={onPressSubmit}>
            <FontYellowBiggerSemibold>완료</FontYellowBiggerSemibold>
        </SubmitButton>
    );
}
