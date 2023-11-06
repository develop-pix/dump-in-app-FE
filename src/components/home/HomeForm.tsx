import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import Collection from './Collection';
import {SafeContainer} from '../../styles/styled-components/home/HomeForm';

export default function HomeForm() {
  return (
    <SafeContainer>
      <Collection />
      <NavigationBar />
    </SafeContainer>
  );
}
