import React from 'react';
import { ScrollView } from 'react-native';

import { MoreEventResultProps } from '../../../interfaces/HomeSearch.interface';
import {
    EventTitleContainer,
    ModalContainer,
} from '../../../styles/layout/home-search/search-result/MoreEventResult.style';
import {
    FontWhiteGreySmallerSemibold,
    FontWhiteGreySmallestSemibold,
} from '../../../styles/layout/reuse/text/Text.style';
import CloseModalButton from '../../reuse/button/CloseModalButton';

import EventResult from './EventResult';

export default function MoreEventResult({ eventData, searchData, closeMoreEventModal }: MoreEventResultProps) {
    return (
        <ModalContainer>
            <ScrollView>
                <CloseModalButton setModal={closeMoreEventModal} />
                <EventTitleContainer>
                    <FontWhiteGreySmallerSemibold>Event</FontWhiteGreySmallerSemibold>
                    <FontWhiteGreySmallestSemibold>검색 결과 {eventData.length}개</FontWhiteGreySmallestSemibold>
                </EventTitleContainer>
                {eventData.map(data => (
                    <EventResult searchData={searchData} key={data.eventID} data={data} />
                ))}
            </ScrollView>
        </ModalContainer>
    );
}
