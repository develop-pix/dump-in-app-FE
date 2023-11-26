import React from 'react';
import EventDetailForm from '../components/event-detail/EventDetailForm';
import {EventDetailSafeContainer} from '../styles/layout/EventDetail.style';

export default function EventDetail() {
  return (
    <EventDetailSafeContainer>
      <EventDetailForm />
    </EventDetailSafeContainer>
  );
}
