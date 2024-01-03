import React from 'react';

import EventDetailForm from '../components/event-detail/EventDetailForm';
import { EventDetailContainer } from '../styles/layout/EventDetail.style';

export default function EventDetail() {
    return (
        <EventDetailContainer>
            <EventDetailForm />
        </EventDetailContainer>
    );
}
