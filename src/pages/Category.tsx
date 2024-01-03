import React from 'react';

import CategoryForm from '../components/category/CategoryForm';
import { CategorySafeContainer } from '../styles/layout/Category.style';

export default function Category() {
    return (
        <CategorySafeContainer>
            <CategoryForm />
        </CategorySafeContainer>
    );
}
