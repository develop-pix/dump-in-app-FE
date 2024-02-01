import { useEffect, useRef, useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import GoBackButtonReview from 'components/reuse/button/GoBackButtonReview';
import { GetBranchData } from 'hooks/axios/Branch';
import { GetReviewData } from 'hooks/axios/ReviewDetail';
import {
    setBranchID,
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
} from 'hooks/redux/ReviewData';
import { useAppSelector } from 'hooks/redux/store';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
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
import ReviewSubmitButton from './ReviewSubmitButton';

export default function ReviewNew() {
    const [errorData, setErrorData] = useState<InputData[]>([]);
    const [openImageModal, setOpenImageModal] = useState<boolean>(false);
    const [limitImage, setLimitImage] = useState<number>(5);
    const [branchName, setBranchName] = useState<string | undefined>(undefined);

    //TODO: 확인 버튼 클릭시 기존 이미지와 비교해서 S3에서 삭제하는 동작(?) 질문 필요?
    const scrollRef = useRef<ScrollView | null>(null);
    const platform = Platform.OS;
    const route = useRoute<LocationStackScreenProps<'ReviewDetail'>['route']>();
    const dispatch = useDispatch();
    const branchID = useAppSelector(state => state.reviewData).branchID;

    // ReviewEdit 초기 데이터 Set
    useEffect(() => {
        const fetchBranchName = async () => {
            //FIXME: 백엔드 데이터 바뀔시 수정필요(위도,경도 필요없도록 수정예정), 또는 리뷰조회시 해당 브랜치의 이름을 얻어올수 있는지 요청한 상태
            if (branchID) {
                const response = await GetBranchData(36.8101475281, 127.1470316068, branchID);
                if (response) {
                    const responseName = response.data.photoBoothBrand.name + ' ' + response.data.name;
                    setBranchName(responseName);
                }
            }
        };

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
                dispatch(setHashtag(fetchData.data.concept));
                dispatch(setHairIron(fetchData.data.curlAmount));
                dispatch(setTools(fetchData.data.goodsAmount));
                dispatch(setPublicOpen(fetchData.data.isPublic));
                dispatch(setBranchID(fetchData.data.photoBoothId));
                fetchBranchName();
            } catch (e) {
                console.log(e);
            }
        };
        getReviewData();
    }, [branchID, dispatch, route.params.reviewID]);

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
                <GoBackButtonReview />
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
                        <LocationInput branchName={branchName} setBranchName={setBranchName} errorData={errorData} />
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
