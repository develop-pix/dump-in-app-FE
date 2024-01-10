import HomeSearchForm from 'components/home-search/HomeSearchForm';
import { HomeSearchSafeContainer } from 'styles/layout/home-search/HomeSearch.style';

export default function HomeSearch() {
    return (
        <HomeSearchSafeContainer>
            <HomeSearchForm />
        </HomeSearchSafeContainer>
    );
}
