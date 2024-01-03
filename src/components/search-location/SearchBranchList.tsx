import React from 'react';

import { SearchBranchListProps } from '../../interfaces/Location.interface';
import {
    ListContainer,
    SearchBranchContainer,
    SearchBranchScrollView,
} from '../../styles/layout/location-search/Location.style';

import BranchList from './BranchList';

export default function SearchBranchList({ data }: SearchBranchListProps) {
    return (
        <SearchBranchScrollView>
            <SearchBranchContainer>
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
            </SearchBranchContainer>
        </SearchBranchScrollView>
    );
}
