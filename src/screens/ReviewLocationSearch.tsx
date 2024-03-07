import ReviewLocationSearchForm from 'components/review-location-search/ReviewLocationSearchForm';
import { LocationSearchContainer } from 'styles/layout/location-search/Location.style';

export default function ReviewLocationSearch() {
    return (
        <LocationSearchContainer>
            <ReviewLocationSearchForm />
        </LocationSearchContainer>
    );
}
