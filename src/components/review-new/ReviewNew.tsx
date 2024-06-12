import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import ReviewGoBackButton from 'components/review-new/ReviewGoBackButton';
import { InputData } from 'interfaces/ReviewNew.interface';
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
import ReviewNewModal from './input/ReviewModal';
import ToolsSelect from './input/ToolsSelect';
import ReviewSubmitButton from './ReviewSubmitButton';

export default function ReviewNew() {
    const [errorData, setErrorData] = useState<InputData[]>([]);
    const [openImageModal, setOpenImageModal] = useState(false);
    const [limitImage, setLimitImage] = useState(5);

    const scrollRef = useRef<ScrollView | null>(null);

    return (
        <>
            <GoBackButtonWithSubmitContainer>
                <ReviewGoBackButton />
                <ReviewSubmitButton errorData={errorData} setErrorData={setErrorData} scrollRef={scrollRef} />
            </GoBackButtonWithSubmitContainer>
            <ReviewFormScrollView ref={scrollRef} scrollEnabled={!openImageModal} showsVerticalScrollIndicator={false}>
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
            <ReviewNewModal
                openImageModal={openImageModal}
                setOpenImageModal={setOpenImageModal}
                limitImage={limitImage}
                setLimitImage={setLimitImage}
            />
        </>
    );
}
