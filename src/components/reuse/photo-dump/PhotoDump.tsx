import {Text} from 'react-native';
import React from 'react';
import {PhotoDumpContainer} from '../../../styles/layout/reuse/photo-dump/PhotoDump.style';

export default function PhotoDump() {
  return (
    <PhotoDumpContainer>
      <Text style={{color: 'white'}}>PhotoDump</Text>
    </PhotoDumpContainer>
  );
}
