import React from 'react';
import {ReviewFormContainer} from '../styles/layout/review-form/ReviewForm.style';
import ReviewNewForm from '../components/review-new/ReviewNewForm';

export default function ReviewNew() {
  return (
    <ReviewFormContainer>
      <ReviewNewForm />
    </ReviewFormContainer>
  );
}
