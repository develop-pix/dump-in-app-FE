import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import GoBackButtonReview from 'components/reuse/button/GoBackButtonReview';
import { UploadImageToS3 } from 'hooks/axios/ReviewNew';
import {
    setBranchID,
    setCameraShot,
    setDate,
    setDescription,
    setFrameColor,
    setHairIron,
    setHashtag,
    setParty,
    setPublicOpen,
    setRepresentativeImage,
    setTools,
} from 'hooks/redux/ReviewData';
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

export default function ReviewEdit() {
    const [errorData, setErrorData] = useState<InputData[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const scrollRef = useRef<any>();
    const platform = Platform.OS;
    const dispatch = useDispatch();

    const representativeImage = useAppSelector(state => state.reviewData).representativeImage;
    const representativeImageName = useAppSelector(state => state.reviewData).representativeImage;
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

    const tempData = {
        representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        representativeImageName: 'test',
        description: 'abcd description Test',
        location: 1,
        date: new Date('Thu Dec 20 2023 20:37:32 GMT+0900'),
        frameColor: '#FF2E00',
        party: 3,
        cameraShot: '클로즈업',
        hashtags: ['일상', '생일'],
        tools: true,
        hairIron: true,
        publicOpen: true,
    };
    const onErrorScroll = (height: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: height, animated: true });
        }
    };

    const onPressSubmit = () => {
        // 기존에 있던 errorData(빈항목) 초기화
        setErrorData([]);

        // 각각의 Input요소가 빈 항목일 경우 errorData에 추가
        if (representativeImage === null || description === '') {
            setErrorData(data => [...data, { InputName: 'representativeImage', height: 0 }]);
        }
        if (description === null || description === '') {
            setErrorData(data => [...data, { InputName: 'description', height: 450 }]);
        }
        if (location === null || location === undefined) {
            setErrorData(data => [...data, { InputName: 'location', height: 570 }]);
        }
        if (date === null) {
            setErrorData(data => [...data, { InputName: 'date', height: 570 }]);
        }
        if (frameColor === null) {
            setErrorData(data => [...data, { InputName: 'frameColor', height: 680 }]);
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

        // errorData 중 제일 상단 항목으로 이동
        if (errorData.length > 0) {
            onErrorScroll(errorData[0].height);
        }

        if (errorData.length === 0) {
            // 우선 S3 업로드만 먼저 추가
            if (representativeImage && representativeImageName) {
                UploadImageToS3(representativeImage, representativeImageName);
                console.log('게시글' + description);
                console.log('위치' + location);
                console.log('날짜' + date);
                console.log('프레임색상' + frameColor);
                console.log('인원' + party);
                console.log('카메라샷' + cameraShot);
                console.log('컨셉' + hashtags);
                console.log('소품' + tools);
                console.log('고데기' + hairIron);
                console.log('공개여부' + publicOpen);
            }
            // 더이상 에러 데이터가 없을 경우 submit 진행, 추후 API추가
        }
    };

    // API 연동 하여 초기값 미리 입력
    useEffect(() => {
        dispatch(setRepresentativeImage(tempData.representativeImage));
        dispatch(setDescription(tempData.description));
        dispatch(setBranchID(tempData.location));
        dispatch(setDate(tempData.date));
        dispatch(setFrameColor(tempData.frameColor));
        dispatch(setParty(tempData.party));
        dispatch(setCameraShot(tempData.cameraShot));
        dispatch(setHashtag(tempData.hashtags));
        dispatch(setTools(tempData.tools));
        dispatch(setHairIron(tempData.hairIron));
        dispatch(setPublicOpen(tempData.publicOpen));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (errorData[0]) {
            onErrorScroll(errorData[0].height);
        }
    }, [errorData]);

    return (
        <ReviewFormScrollView ref={scrollRef} scrollEnabled={!openModal}>
            {openModal ? <ReviewNewModal setOpenModal={setOpenModal} /> : null}
            <GoBackButtonWithSubmitContainer platform={platform}>
                <GoBackButtonReview />
                <SubmitButton onPress={onPressSubmit}>
                    <FontYellowBiggerSemibold>완료</FontYellowBiggerSemibold>
                </SubmitButton>
            </GoBackButtonWithSubmitContainer>
            <ImageFileInput
                representativeImage={representativeImage}
                setOpenModal={setOpenModal}
                errorData={errorData}
            />
            <InputContainer>
                <InputWrapper>
                    <ReviewDescriptionInput description={description} errorData={errorData} />
                    <LocationAndDateContainer>
                        <LocationInput location={location} errorData={errorData} />
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
