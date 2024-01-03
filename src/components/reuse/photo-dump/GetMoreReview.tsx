import React from 'react';
import { Text } from 'react-native';

import { GetMoreReviewContainer } from '../../../styles/layout/reuse/photo-dump/GetMoreReview.style';

export default function GetMoreReview() {
    return (
        <GetMoreReviewContainer>
            <Text style={{ color: 'white' }}>데이터 더 가져오기(임시)</Text>
        </GetMoreReviewContainer>
    );
}
