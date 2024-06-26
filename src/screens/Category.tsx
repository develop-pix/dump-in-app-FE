import CategoryForm from 'components/category/CategoryForm';
import { CategorySafeContainer } from 'styles/layout/category/Category.style';

export default function Category() {
    return (
        <CategorySafeContainer>
            <CategoryForm />
        </CategorySafeContainer>
    );
}
