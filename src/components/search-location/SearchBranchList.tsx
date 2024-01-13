import SearchNoData from 'components/reuse/alert/SearchNoData';
import { SearchBranchListProps } from 'interfaces/Location.interface';
import {
    ListContainer,
    SearchBranchContainer,
    SearchBranchScrollView,
} from 'styles/layout/location-search/Location.style';

import BranchList from './BranchList';

export default function SearchBranchList({ data }: SearchBranchListProps) {
    return (
        <SearchBranchScrollView>
            <SearchBranchContainer>
                {Object.keys(data).length !== 0 ? (
                    <ListContainer>
                        {data.map(branch => {
                            return (
                                <BranchList
                                    key={branch.branchID}
                                    branchName={branch.branchName}
                                    distance={branch.distance}
                                    branchID={branch.branchID}
                                />
                            );
                        })}
                    </ListContainer>
                ) : (
                    <SearchNoData alertText="검색 결과가 없습니다." recommendText="" />
                )}
            </SearchBranchContainer>
        </SearchBranchScrollView>
    );
}
