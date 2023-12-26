import React from 'react';
import {ReviewFormContainer} from '../styles/layout/review-form/ReviewForm.style';
import ReviewEditForm from '../components/review-edit/ReviewEditForm';

export default function ReviewEdit() {
  return (
    <ReviewFormContainer>
      <ReviewEditForm />
    </ReviewFormContainer>
  );
}
