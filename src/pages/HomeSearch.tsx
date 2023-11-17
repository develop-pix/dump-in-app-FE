import HomeSearchForm from '../components/home-serach/HomeSearchForm';
import {HomeSearchSafeContainer} from '../styles/home-search/HomeSearch.style';

export default function HomeSearch() {
  return (
    <HomeSearchSafeContainer>
      <HomeSearchForm />
    </HomeSearchSafeContainer>
  );
}
