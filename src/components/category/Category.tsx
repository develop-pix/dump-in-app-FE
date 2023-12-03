import React, {useState} from 'react';
import {
  CategoryContainer,
  PageBar,
  PageBarText,
} from '../../styles/layout/category/Category.style';
import {TouchableOpacity} from 'react-native';
import CategoryPhotoBooth from './CategoryPhotoBooth';
import CategoryEvent from './CategoryEvent';
import {ScrollView} from 'react-native';

export default function Category() {
  const [categoryPage, setCategoryPage] = useState<'photoBooth' | 'event'>(
    'photoBooth',
  );

  return (
    <CategoryContainer>
      <ScrollView>
        <PageBar>
          <TouchableOpacity onPress={() => setCategoryPage('photoBooth')}>
            <PageBarText selected={categoryPage === 'photoBooth'}>
              포토부스
            </PageBarText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategoryPage('event')}>
            <PageBarText selected={categoryPage === 'event'}>
              이벤트
            </PageBarText>
          </TouchableOpacity>
        </PageBar>

        {categoryPage === 'photoBooth' ? (
          <CategoryPhotoBooth />
        ) : (
          <CategoryEvent />
        )}
      </ScrollView>
    </CategoryContainer>
  );
}
