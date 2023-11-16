import React from 'react';
import {FilterProps} from '../../interfaces/reuse/Filter.interface';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

interface HomeSelectedFilterOptionProps {
  filterData: FilterProps;
}

const ColorBox = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 6px;
`;

const TextContainer = styled.View`
  padding: 4px 10px;
  background-color: #222222;
  border-radius: 6px;
`;

const WhiteText = styled.Text`
  color: white;
`;

const HomeSelectedFilterOption: React.FC<HomeSelectedFilterOptionProps> = ({
  filterData,
}) => (
  <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
    {Object.entries(filterData).map(([key, value]) => {
      if (key === 'frameColor' && value) {
        return <ColorBox key={key} style={{backgroundColor: value}} />;
      }

      if (key === 'party' && value > 0) {
        return (
          <TextContainer key={key}>
            <WhiteText>{value.toString()}</WhiteText>
          </TextContainer>
        );
      }

      if (value && value.length > 0) {
        return (
          <TextContainer key={key}>
            <WhiteText>{value}</WhiteText>
          </TextContainer>
        );
      }
    })}
  </View>
);

export default HomeSelectedFilterOption;
