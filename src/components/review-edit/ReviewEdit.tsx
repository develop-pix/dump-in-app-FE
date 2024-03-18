import { useEffect, useRef, useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { GetReviewData } from 'hooks/axios/ReviewDetail';
import {
    setBranchID,
    setBranchName,
    setCameraShot,
    setDate,
    setDescription,
    setEnlargedImage,
    setFrameColor,
    setHairIron,
    setHashtag,
    setImage,
    setParty,
    setPublicOpen,
    setRepresentativeImage,
    setTools,
} from 'hooks/redux/reviewEditSlice';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { ConceptData } from 'interfaces/redux/Store.interface';
import { InputData } from 'interfaces/ReviewEdit.interface';
import { GoBackButtonWithSubmitContainer } from 'styles/layout/reuse/button/GoBackButton.style';
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
import ReviewModal from './input/ReviewModal';
import ToolsSelect from './input/ToolsSelect';
import ReviewGoBackButton from './ReviewGoBackButton';
import ReviewSubmitButton from './ReviewSubmitButton';

export default function ReviewEdit() {
    const [errorData, setErrorData] = useState<InputData[]>([]);
    const [openImageModal, setOpenImageModal] = useState<boolean>(false);
    const [limitImage, setLimitImage] = useState<number>(4);

    const scrollRef = useRef<ScrollView | null>(null);
    const platform = Platform.OS;
    const route = useRoute<LocationStackScreenProps<'ReviewDetail'>['route']>();
    const dispatch = useDispatch();

    // ReviewEdit 초기 데이터 Set
    useEffect(() => {
        const getReviewData = async () => {
            try {
                let image = [];
                const fetchData = await GetReviewData(route.params.reviewID);
                dispatch(
                    setRepresentativeImage({
                        imageURL: fetchData.data.mainThumbnailImageUrl,
                        imageName: undefined,
                    }),
                );

                image = fetchData.data.image.map(
                    (imageData: { id: number | undefined; imageUrl: string | undefined }) => {
                        setLimitImage(prev => prev - 1);
                        return { imageURL: imageData.imageUrl, imageName: undefined };
                    },
                );
                dispatch(setImage(image));
                dispatch(
                    setEnlargedImage({
                        imageURL: fetchData.data.mainThumbnailImageUrl,
                        imageName: undefined,
                    }),
                );
                dispatch(setDescription(fetchData.data.content));
                dispatch(setDate(fetchData.data.date));
                dispatch(setFrameColor(fetchData.data.frameColor));
                dispatch(setParty(fetchData.data.participants));
                dispatch(setCameraShot(fetchData.data.cameraShot));
                if (fetchData.data.concept.length > 0) {
                    const newConcept = fetchData.data.concept.map((hashtag: ConceptData) => {
                        return hashtag.name;
                    });
                    dispatch(setHashtag([...newConcept]));
                }
                dispatch(setHairIron(fetchData.data.curlAmount));
                dispatch(setTools(fetchData.data.goodsAmount));
                dispatch(setPublicOpen(fetchData.data.isPublic));
                dispatch(setBranchID(fetchData.data.photoBoothId));
                dispatch(setBranchName(fetchData.data.photoBoothName));
            } catch (e) {
                console.log(e);
            }
        };
        getReviewData();
    }, [dispatch, route.params.reviewID]);

    return (
        <ReviewFormScrollView ref={scrollRef} scrollEnabled={!openImageModal}>
            {openImageModal ? (
                <ReviewModal
                    setOpenImageModal={setOpenImageModal}
                    limitImage={limitImage}
                    setLimitImage={setLimitImage}
                />
            ) : null}
            <GoBackButtonWithSubmitContainer platform={platform}>
                <ReviewGoBackButton />
                <ReviewSubmitButton errorData={errorData} setErrorData={setErrorData} scrollRef={scrollRef} />
            </GoBackButtonWithSubmitContainer>
            <ImageFileInput
                setOpenImageModal={setOpenImageModal}
                errorData={errorData}
                setLimitImage={setLimitImage}
                scrollRef={scrollRef}
            />
            <InputContainer>
                <InputWrapper>
                    <ReviewDescriptionInput errorData={errorData} />
                    <LocationAndDateContainer>
                        <LocationInput errorData={errorData} />
                        <DateInput errorData={errorData} />
                    </LocationAndDateContainer>
                    <FrameColorSelect errorData={errorData} />
                    <PartySelect errorData={errorData} />
                    <CameraShotSelect errorData={errorData} />
                    <HashtagSelect errorData={errorData} />
                    <EquipmentContainer>
                        <ToolsSelect />
                        <HairIronSelect />
                    </EquipmentContainer>
                    <PublicOpenSwitch />
                </InputWrapper>
            </InputContainer>
        </ReviewFormScrollView>
    );
}
