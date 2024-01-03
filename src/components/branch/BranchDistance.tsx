import { BranchDistanceProps } from '../../interfaces/Branch.interface';
import { BranchDistanceContainer, BranchDistanceForm } from '../../styles/layout/branch/BranchDistance.style';
import { FontWhiteSmallerMedium } from '../../styles/layout/reuse/text/Text.style';
import { DistanceForm } from '../../utils/FormChange';

export default function BranchDistance({ distance }: BranchDistanceProps) {
    return (
        <BranchDistanceContainer>
            <BranchDistanceForm>
                <FontWhiteSmallerMedium>내 위치로부터 {DistanceForm(distance)}</FontWhiteSmallerMedium>
            </BranchDistanceForm>
        </BranchDistanceContainer>
    );
}
