import { useEffect, useRef, useState } from 'react';
import { Platform, ScrollView } from 'react-native';

import GoBackButtonReview from 'components/reuse/button/GoBackButtonReview';
import { UploadImageToS3, UploadNewReview } from 'hooks/axios/ReviewNew';
import { useAppSelector } from 'hooks/redux/store';
import { InputData } from 'interfaces/ReviewNew.interface';
import { GoBackButtonWithSubmitContainer, SubmitButton } from 'styles/layout/reuse/button/GoBackButton.style';
import { FontYellowBiggerSemibold } from 'styles/layout/reuse/text/Text.style';
import {
    EquipmentContainer,
    InputContainer,
    InputWrapper,
    LocationAndDateContainer,
    ReviewFormScrollView,
} from 'styles/layout/review-form/ReviewForm.style';

import CameraShotSelect from './input/CameraShotSelect';
import DateInput from './input/DateInput';
import FrameColorSelect from './input/FrameColorSelect';
import HairIronSelect from './input/HairIronSelect';
import HashtagSelect from './input/HashtagSelect';
import ImageFileInput from './input/ImageFileInput';
import LocationInput from './input/LocationInput';
import PartySelect from './input/PartySelect';
import PublicOpenSwitch from './input/PublicOpenSwitch';
import ReviewDescriptionInput from './input/ReviewDescriptionInput';
import ReviewNewModal from './input/ReviewNewModal';
import ToolsSelect from './input/ToolsSelect';

export default function ReviewNew() {
    const [errorData, setErrorData] = useState<InputData[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [limitImage, setLimitImage] = useState<number>(5);

    const scrollRef = useRef<ScrollView | null>(null);
    const platform = Platform.OS;
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

    /** 완료 버튼 클릭시 입력하지 않은 부분 스크롤 이동 */
    const onErrorScroll = (height: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: height, animated: true });
        }
    };

    /** 완료 버튼 클릭시 S3이미지 업로드 및 리뷰 업로드 */
    const onPressSubmit = async () => {
        // 기존에 있던 errorData(빈항목) 초기화
        setErrorData([]);
        // 각각의 Input요소가 빈 항목일 경우 errorData에 추가
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
                }
            });
        } catch (e) {
            console.log(e);
        }
        // TODO: 리뷰 모달 클로즈 , 아래 뒤로가기 버튼 클릭시 닫겠습니까 모달 출력
    };

    useEffect(() => {
        if (errorData[0]) {
            onErrorScroll(errorData[0].height);
        }
    }, [errorData]);

    return (
        <ReviewFormScrollView ref={scrollRef} scrollEnabled={!openModal}>
            {openModal ? (
                <ReviewNewModal setOpenModal={setOpenModal} limitImage={limitImage} setLimitImage={setLimitImage} />
            ) : null}
            <GoBackButtonWithSubmitContainer platform={platform}>
                <GoBackButtonReview />
                <SubmitButton onPress={onPressSubmit}>
                    <FontYellowBiggerSemibold>완료</FontYellowBiggerSemibold>
                </SubmitButton>
            </GoBackButtonWithSubmitContainer>
            <ImageFileInput setOpenModal={setOpenModal} errorData={errorData} setLimitImage={setLimitImage} />
            <InputContainer>
                <InputWrapper>
                    <ReviewDescriptionInput description={description} errorData={errorData} />
                    <LocationAndDateContainer>
                        <LocationInput errorData={errorData} />
                        <DateInput date={date} errorData={errorData} />
                    </LocationAndDateContainer>
                    <FrameColorSelect frameColor={frameColor} errorData={errorData} />
                    <PartySelect party={party} errorData={errorData} />
                    <CameraShotSelect cameraShot={cameraShot} errorData={errorData} />
                    <HashtagSelect hashtags={hashtags} errorData={errorData} />
                    <EquipmentContainer>
                        <ToolsSelect tools={tools} />
                        <HairIronSelect hairIron={hairIron} />
                    </EquipmentContainer>
                    <PublicOpenSwitch publicOpen={publicOpen} />
                </InputWrapper>
            </InputContainer>
        </ReviewFormScrollView>
    );
}
