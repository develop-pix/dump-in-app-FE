import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

/* page */
export const ReviewFormContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

/* ReviewNew */

export const ReviewFormScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 80 },
})`
    width: 100%;
`;

export const InputContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const InputWrapper = styled.View`
    width: 90%;
    gap: 40px;
`;

export const LocationAndDateContainer = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 20px;
`;

export const ReviewDescriptionInputContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const EquipmentContainer = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 20px;
`;

/* 공통 */
export const ReviewInputTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 3px;
`;

export const ReviewErrorContainer = styled.View`
    margin-left: 5px;
`;
