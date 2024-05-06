import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    TermsOfUseDescription,
    TermsOfUseList,
    TermsOfUseSafeContainer,
    TermsOfUseScrollView,
    TermsOfUseTitle,
} from 'styles/layout/my-page/MyActivity/TermsOfUse.style';
import { HeaderLeftContainer, RowContainer } from 'styles/layout/reuse/header/Header.style';
import { FontWhiteGreyNormalMedium, FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function TermsOfUse() {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            headerTitle: () => {
                return (
                    <RowContainer>
                        <FontWhiteNormalMedium>이용약관</FontWhiteNormalMedium>
                    </RowContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <TermsOfUseSafeContainer>
            <TermsOfUseScrollView>
                <TermsOfUseList>
                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>위치정보 이용약관</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제1조 (목적)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            본 약관은 회원(본 약관에 동의한 자를 말합니다. 이하 “회원”이라고 합니다)이 덤핀(이하
                            “회사”라고 합니다)이 제공하는 위치기반서비스(이하 “서비스”라고 합니다)를 이용함에 있어
                            회사와 회원의 권리・의무 및 책임사항을 규정함을 목적으로 합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제 2 조 (이용약관의 효력 및 변경)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 본 약관은 서비스를 신청한 회원 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한
                            소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이 발생합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 신청자가 모바일 단말기, PC 등에서 약관의 `동의하기` 버튼을 선택하였을 경우 본 약관의
                            내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로 봅니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 회사는 위치정보의 보호 및 이용 등에 관한 법률, 콘텐츠산업 진흥법, 전자상거래 등에서의
                            소비자보호에 관한 법률, 소비자 기본법 약관의 규제에 관한 법률 등 관련 법령을 위배하지 않는
                            범위에서 본 약관을 변경할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            4. 회사가 전항에 따라 회원에게 통지하면서 공지일로부터 적용일 7일 후까지 거부의사를 표시하지
                            아니하면 개정 약관에 승인한 것으로 간주합니다. 회원이 개정 약관에 동의하지 않을 경우 회원은
                            이용계약을 해지할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제 3 조 (관계법령의 적용)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에 명시되지 아니한 사항에
                            대하여는 관계법령 또는 상관례에 따릅니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제4조 (서비스의 가입)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            회원은 본 약관에 동의하고 서비스에 가입신청함으로써 서비스의 이용자가 될 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            실명이 아니거나 다른 사람의 명의를 사용하는 등 허위로 신청하는 경우에는 서비스 가입 신청에
                            대한 승낙을 유보할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제5조 (서비스의 해지)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            회원이 서비스 이용을 해지하고자 할 경우 회원은 회사가 정한 절차를 통해 서비스 해지를 신청할
                            수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제6조 (서비스의 내용 등)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            | 서비스명 | 서비스 내용 및 보유 목적 | 개인위치정보 보유기간 |
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>| --- | --- | --- |</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            | 위치정보를 활용한 검색결과 제공 서비스 | 정보 검색을 요청하거나 개인위치정보주체 또는
                            이동성 있는 기기의 위치정보를 제공 시 본 위치정보를 이용한 검색결과 및 주변결과(제휴 매장
                            등)를 제시 | 이용 목적 달성 시, 즉시 파기 |
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 「위치정보의 보호 및 이용 등에 관한 법률」 제16조제2항에 따라 위치정보
                            이용·제공사실 확인자료를 자동 기록·보존하며, 해당 자료는 3개월간 보관합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 회사는 개인위치정보의 이용 또는 제공목적을 달성한 때에는 「위치정보의 보호 및 이용 등에
                            관한 법률」 제23조에 따라 위치정보 이용·제공사실 확인자료를 제외한 개인위치정보를 즉시
                            파기합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제7조 (서비스이용의 제한 및 중지)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 이용자가 다음 각호에 해당하는 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수
                            있습니다
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에
                            지장이 있는 때
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 4) 기타 중대하 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는
                            경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            2. 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한 기간
                            등을 회원에게 알려야 합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제8조 (서비스 이용요금)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            고객은 본 서비스를 무료로 이용할 수 있습니다. 무선서비스 이용 시 발생하는 데이터 통신료는
                            별도이며, 회원이 가입한 각 이동통신사의 정책에 따릅니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제9조 (개인위치정보의 이용 또는 제공)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 미리 이용약관에 명시한
                            후 개인위치정보주체의 동의를 얻어야 합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 회원 및 법정대리인의 권리와 그 행사방법은 제소 당시의 이용자의 주소에 의하며, 주소가 없는
                            경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는
                            거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 회사는 타사업자 또는 이용 고객과의 요금정산 및 민원처리를 위해 위치정보 이용, 제공, 사실
                            확인자료를 자동 기록 및 보존하며, 해당 자료는 3개월간 보관합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            4. 회사는 개인위치정보를 회원이 지정하는 제 3자에게 제공하는 경우에는 개인위치정보를 수집한
                            당해 통신 단말장치로 매 회 회원에게 제공받는 자, 제공 일시 및 제공목적을 즉시 통보합니다.
                            단, 아래 각호의 1에 해당하는 경우에는 회원이 미리 특정하여 지정한 통신 단말장치 또는
                            전자우편주소로 통보합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지
                            아니한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 개인위치정보주체가 온라인 게시 등의 방법으로 통보할 것을 미리 요청한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            5. 회사는 회원의 동의가 있거나 다음 각 호의 어느 하나에 해당하는 경우를 제외하고는
                            개인위치정보 또는 위치정보 이용·제공사실 확인자료를 이용약관에 명시 또는 고지한 범위를 넘어
                            이용하거나 제3자에게 제공할 수 없습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 위치기반서비스의 제공에 따른 요금정산을 위하여 위치정보 이용·제공사실 확인자료가
                            필요한 경우 아니한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로
                            가공하여 제공하는 경우
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제 10 조 (개인위치정보주체의 권리)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의
                            제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다. 이 경우 회사는 제공받은
                            개인위치정보 및 위치정보 이용, 제공사실 확인자료를 파기합니다. 단, 동의의 일부를 철회하는
                            경우에는 철회하는 부분의 개인위치정보 및 위치정보 이용·제공사실 확인자료에 한합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 회원은 회사에 대하여 언제든지 개인위치정보의 이용 또는 제공의 일시적인 중지를 요구할 수
                            있고, 회사는 이를 거절할 수 없으며 이를 위한 기술적 수단을 갖추고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 해당
                            자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 사유 없이
                            회원의 요구를 거절할 수 없습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 본인에 대한 위치정보 이용, 제공사실 확인자료
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 본인의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법률 규정에
                            의하여 제3자에게 제공된 이유 및 내용
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            4. 회원은 제1항 내지 제3항의 권리행사를 위해 회사 소정의 절차를 통해 요구할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제11조 (법정대리인의 권리)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 14세 미만의 회원에 대해서는 개인위치정보를 이용한 위치기반서비스 제공 및
                            개인위치정보의 제3자 제공에 대한 동의를 당해 회원과 당해 회원의 법정대리인으로부터 동의를
                            받아야 합니다. 이 경우 법정대리인은 제11조에 의한 회원의 권리를 모두 가집니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 회사는 14세 미만의 아동의 개인위치정보 또는 위치정보 이용, 제공사실 확인자료를 이용약관에
                            명시 또는 고지한 범위를 넘어 이용하거나 제3자에게 제공하고자 하는 경우에는 14세 미만의
                            아동과 그 법정대리인의 동의를 받아야 합니다. 단, 아래의 경우는 제외합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 위치정보 및 위치기반서비스 제공에 따른 요금정산을 위하여 위치정보 이용, 제공사실
                            확인자료가 필요한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로
                            가공하여 제공하는 경우
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>
                            제12조 (8세 이하의 아동 등의 보호의무자의 권리)
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동”등이라 한다)의 보호의무자가 8세
                            이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는
                            경우에는 본인의 동의가 있는 것으로 봅니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; 1) 8세 이하의 아동</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; 2) 금치산자</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 장애인복지법제2조제2항제2호의 규정에 의한 정신적 장애를 가진 자로서
                            장애인고용촉진및직업재활법 제2조제2호의 규정에 의한 중증장애인에 해당하는 자(장애인복지법
                            제29조의 규정에 의하여 장애인등록을 한 자에 한한다)
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            2. 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에
                            동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에
                            제출하여야 합니다. 3. 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에
                            동의하는 경우 개인위치 정보주체 권리의 전부를 행사할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제13조 (면책)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한
                            손해에 대해서는 책임을 부담하지 않습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제 3자의 고의적인 서비스
                            방해가 있는 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 회원의 귀책사유로 서비스 이용에 장애가 있는 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 4) 제1호 내지 제3호를 제외한 기타 회사의 고의, 과실이 없는 사유로 인한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            2. 회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을
                            하지 않으며 이로 인해 발생한 회원의 손해에 대하여는 책임을 부담하지 아니합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제14조 (규정의 준용)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 본 약관은 대한민국 법령에 의하여 규정되고 이행됩니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 본 약관에 규정되지 않은 사항에 대해서는 관계법령 및 상관습에 의합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>부칙</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제 1조 (시행일)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            본 약관은 2023년 12월 01일부터 적용됩니다. (앱 시행일로 수정 예정)
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>제 2조 위치정보 관리 책임자 정보</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 다음과 같이 위치 정보 관리책임자를 지정하여 이용자들이 서비스 이용과정에서 발생한
                            민원사항 처리를 비롯하여 개인위치정보주체의 권리 보호를 위해 힘쓰고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>위치정보 관리책임자 : 정보보호책임자</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>이메일 : dumpin@naver.com</FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>---</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>### 서비스 이용약관</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>계정관련</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump’in)은 모바일 앱을 통해 가입을 할 수 있습니다. 덤핀(dump&apos;in) 네이버
                            소셜로그인, 카카오 소셜로그인, 애플 소셜로그인을 통해서 가입 할 수 있습니다. 부정한 의도로
                            계정 생성 및 이용 시 해당 회원에 대한 서비스가 중단 될 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            1. 덤핀(dump&apos;in)서비스 계정 생성 시 필요한 정보를 입력하지 않거나 허위 정보를 입력한
                            경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 덤핀(dump&apos;in)이 과거에 운영 원칙 혹은 법률 위반의 사유로 해당 계정에 대한 징계 및
                            삭제 처분이 이루어졌을 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 덤핀(dump&apos;in)서비스 운영 원칙을 준수하지 않으며 지속적으로 서비스에 문제가 되는
                            행위를 했을 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            4. 덤핀(dump&apos;in)서비스가 안내하는 정상적인 방법 외 다른 방법으로 접근에 대한 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            5. 덤핀(dump&apos;in) 및 덤핀(dump&apos;in) 서비스 이용자들에게 불편을 끼칠 의도를 가지고
                            접근 및 이용을 했을 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            6. 회원은 최소 14세 이상이어야 하며 회원이 14세 미만이라고 의심되는 경우 회원 계정과 관련
                            정보는 별도의 통지나 예고 없이 삭제될 수 있음
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>서비스 이용 시 유의사항</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)은 사용자가 아래와 같이 잘못된 행위나 방법으로 서비스를 이용할 경우 사용에
                            대한 제재(내부징계, 이용정지, 강제탈퇴 등)를 가할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            1. 덤핀(dump&apos;in) 서비스의 다른 이용자에게 불쾌감을 주거나 혐오 분위기를 조성하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 잘못된 방법으로 서비스의 제공을 방해하거나 덤핀(dump&apos;in)이 안내하는 방법 이외의 다른
                            방법을 사용하여 덤핀(dump&apos;in) 서비스에 접근 및 이용하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 이용자의 정보를 무단으로 수집, 이용하거나 타인에게 제공하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            4. 서비스를 덤핀(dump&apos;in)과의 협의 및 계약 없이 영리나 홍보 및 광고 목적으로 이용하는
                            행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            5. 음란 정보나 저작권 침해 정보 등 공서양속 및 법령에 위반되는 내용의 정보 등을 발송하거나
                            게시하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            6. 덤핀(dump&apos;in)의 동의 없이 덤핀(dump&apos;in) 서비스 또는 이에 포함된 소프트웨어의
                            일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            7. 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 덤핀(dump&apos;in) 서비스를
                            복제, 분해 또는 모방하거나 기타 변형하는 행위
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            8. 관련 법령 및 법률, 덤핀(dump&apos;in)의 모든 약관 또는 운영 정책 및 운영원칙을 준수하지
                            않는 행위
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>개인정보 보호 관련</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            개인정보는 덤핀(dump&apos;in) 서비스의 원활한 이용을 위해 사용자가 동의한 목적과 범위
                            내에서만 이용되어집니다. 개인정보보호 관련 상세한 사항은 덤핀(dump&apos;in)
                            개인정보처리방침을 참고하시기 바랍니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>게시물 저작권 보호 관련</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 덤핀(dump&apos;in) 서비스 사용자가 서비스 내 게시한 게시물은 해당 게시물의 저작자에게
                            귀속됩니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 사용자가 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 홍보글, 포토부스
                            상세페이지, 광고 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 수정, 복제,
                            편집되어 게시될 수 있습니다. 이 경우, 덤핀(dump&apos;in)은 저작권법 규정을 준수하며,
                            사용자는 언제든지 고객센터 또는 운영자 문의 기능을 통해 해당 게시물에 대해 삭제, 검색결과
                            제외, 비공개 등의 조치를 요청할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            3. 위 2항 이외의 방법으로 사용자의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편,
                            메시지 등을 이용하여 사전에 사용자의 동의를 얻어야 합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>게시물 관리</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 사용자의 게시물이 &quot;정보통신망법&quot; 및 &quot;저작권법&quot;등 관련법에 위반되는
                            내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을
                            요청할 수 있으며,덤핀(dump&apos;in)은 관련법에 따라 조치를 취하여야 합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            2. 덤핀(dump&apos;in)은 ‘게시물 저작권 보호관련’ 전체 항 및 ‘게시물 관리’ 1항에 따른
                            권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및
                            관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치(삭제, 노출제한,
                            게시중단, 서비스 이용정지) 등을 취할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>서비스 고지 및 홍보 내용 표시</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            1. 덤핀(dump&apos;in)은 서비스 사용자의 편의를 위해 서비스 이용과 관련된 각종 고지 및 기타
                            서비스 홍보를 포함한 다양한 정보를 덤핀(dump&apos;in) 서비스에 표시하거나 사용자의 휴대폰
                            알림 메시지(Push Notification) 등으로 발송할 수 있습니다. 이 경우 서비스 사용자분의 통신환경
                            또는 요금구조에 따라 서비스 사용자분이 데이터 요금 등을 부담할 수 있습니다. 서비스
                            사용자분은 관련 법령상 필요한 내용을 제외하고 언제든지 이러한 정보에 대한 수신 거절을 할 수
                            있으며, 이 경우 덤핀(dump&apos;in)은 즉시 위와 같은 정보를 보내는 것을 중단합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>위치기반서비스 관련</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)은 사용자에게 보다 나은 서비스를 제공하기 위하여 덤핀(dump&apos;in)
                            서비스에 위치기반서비스를 포함시킬 수 있습니다. 덤핀(dump&apos;in)의 위치기반서비스는
                            사용자의 단말기기의 위치정보를 수집하는 위치정보사업자로부터 위치정보를 전달받아 제공하는
                            서비스이며, 구체적으로는 사용자의 현재 위치를 기준으로 가까운 포토부스를 표시해주는 서비스가
                            있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            특히, 사용자가 14세 미만 이용자로서 개인위치정보를 활용한 위치기반 서비스를 이용하기
                            위해서는 덤핀(dump&apos;in)은 사용자의 개인위치정보를 이용 또는 제공하게 되며, 이 경우
                            부모님 등 법정대리인의 동의가 먼저 있어야 합니다. 만약 법정대리인의 동의 없이
                            위치기반서비스가 이용된 것으로 판명된 때에는 덤핀(dump&apos;in)은 즉시 사용자의
                            위치기반서비스 이용을 중단하는 등 적절한 제한을 할 수 있습니다. 사용자(14세 미만 이용자의
                            법정대리인 포함)는 덤핀(dump&apos;in) 서비스와 관련된 개인위치정보의 이용, 제공 목적,
                            제공받는 자의 범위 및 위치기반서비스의 일부에 대하여 동의를 유보하거나, 이용∙제공에 대한
                            동의의 전부 또는 일부 철회할 수 있으며, 일시적인 중지를 요구할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            위치정보의 보호 및 이용 등에 관한 법률의 규정에 따라 개인위치정보 및 위치정보 이용∙제공사실
                            확인자료를 3개월 이상 보관하며, 사용자가 동의의 전부 또는 일부를 철회한 때에는
                            덤핀(dump&apos;in)은 철회한 부분에 해당하는 개인위치정보 및 위치정보 이용∙제공사실
                            확인자료를 지체 없이 파기를 진행하겠습니다. 사용자(14세 미만 이용자의 법정대리인 포함)는
                            덤핀(dump&apos;in)에 대하여 사용자에 대한 위치정보 이용∙제공사실 확인자료나, 사용자의
                            개인위치정보가 법령에 의하여 제3자에게 제공되었을 때에는 그 이유 및 내용의 열람 또는 고지를
                            요구할 수 있고, 오류가 있는 때에는 정정을 요구할 수 있습니다. 만약, 덤핀(dump&apos;in)
                            사용자의 개인위치정보를 사용자가 지정하는 제3자에게 직접 제공하는 때에는 법령에 따라
                            개인위치정보를 수집한 스마트폰 등으로 사용자에게 개인위치정보를 제공받는 자, 제공 일시 및
                            제공 목적을 즉시 통보하겠습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)은 8세 이하의 아동 등(금치산자, 중증 정신장애인 포함)의 보호의무자가
                            개인위치정보의 이용 또는 제공에 서면으로 동의하는 경우에는 해당 본인의 동의가 있는 것으로
                            보며, 이 경우 보호의무자는 개인위치정보주체의 권리를 모두 행사할 수 있습니다.
                            덤핀(dump&apos;in)은 사용자의 위치정보를 안전하게 보호하기 위하여
                            위치정보관리책임자(정보보호책임자, dumpin@naver.com)를 지정하고 있습니다. 만약 사용자와
                            덤핀(dump&apos;in) 간의 위치정보와 관련한 분쟁에 대하여 협의가 어려운 때에는 사용자는
                            위치정보의 보호 및 이용 등에 관한 법률 제 28조 2항 및 개인정보보호법 제43조의 규정에 따라
                            개인정보 분쟁조정위원회에 조정을 신청할 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>서비스 중단</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in) 서비스는 장비, 데이터 통신환경 서버의 유지∙보수를 위한 정기 또는 임시
                            점검 또는 다른 상당한 이유로 서비스의 제공이 일시 중단될 수 있으며, 이때에는 미리 서비스
                            제공 화면에 공지하겠습니다. 만약, 덤핀(dump&apos;in)가 예측할 수 없는 이유 혹은 천재지변과
                            같은 돌발상황으로 불가피하게 서비스가 중단된 때에는 덤핀(dump&apos;in)가 상황을 파악하는
                            즉시 통지하겠습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>이용계약 해지(서비스 탈퇴)</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            사용자가 덤핀(dump&apos;in) 서비스의 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내
                            제공되는 메뉴를 이용하여 이용계약의 해지 신청을 할 수 있으며, 덤핀(dump&apos;in)은 법령이
                            정하는 바에 따라 신속히 처리하겠습니다. 다만, 혐오감 조성 및 부적절한 위법의 게시물의 업로드
                            및 사기 등의 부정이용 방지를 위해 법적 관련 분쟁이 발생한 사용자는 이용계약 해지 및 서비스
                            탈퇴가 특정 기간 동안 제한될 수 있습니다. 이용계약이 해지되면 법령 및 개인정보처리방침에
                            따라 사용자 정보를 보유하는 경우를 제외하고는 사용자 정보나 사용자가 작성한 게시물 등 모든
                            데이터는 삭제됩니다. 다만, 사용자가 작성한 게시물이 제3자에 의하여 스크랩 또는 다른 공유
                            기능으로 게시된 경우에는 다른 이용자의 정상적 서비스 이용을 위하여 필요한 범위 내에서
                            덤핀(dump&apos;in) 서비스 내에 삭제되지 않고 남아 있게 됩니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>책임제한</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)은 법령상 허용되는 한도 내에서 덤핀(dump&apos;in) 서비스와 관련하여 본
                            약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나 보증을 하지 않습니다. 예를 들어,
                            덤핀(dump&apos;in)은 덤핀(dump&apos;in) 서비스에 속한 콘텐츠, 서비스의 특정 기능, 서비스의
                            이용가능성에 대하여 어떠한 약정이나 보증을 하는 것이 아니며, 덤핀(dump&apos;in) 서비스를
                            있는 그대로 제공할 뿐입니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>손해배상</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)의 과실로 인하여 사용자가 손해를 입게 될 경우 덤핀(dump&apos;in)은 법령에
                            따라 사용자의 손해를 배상하겠습니다. 다만, 덤핀(dump&apos;in)은 서비스에 접속 또는
                            이용과정에서 발생하는 개인적인 손해, 제3자가 불법적으로 덤핀(dump&apos;in)의 서버에
                            접속하거나 서버를 이용함으로써 발생하는 손해, 제3자가 덤핀(dump&apos;in)이 이용하는 서버에
                            대한 전송 또는 서버로부터의 전송을 방해함으로써 발생하는 손해, 제3자가 악성 프로그램을 전송
                            또는 유포함으로써 발생하는 손해, 전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해,
                            명예훼손 등 제3자가 덤핀(dump&apos;in) 서비스를 이용하는 과정에서 사용자에게 발생시킨 손해에
                            대하여 책임을 부담하지 않습니다. 또한 덤핀(dump&apos;in)은 법률상 허용되는 한도 내에서 간접
                            손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>약관수정</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            덤핀(dump&apos;in)은 법률이나 덤핀(dump&apos;in) 서비스의 변경 사항을 반영하기 위한 목적
                            등으로 본 약관이나 덤핀(dump&apos;in) 서비스 이용방법, 해당 안내 및 고지사항을 수정할 수
                            있습니다. 본 약관이 변경되는 경우 변경된 약관은 게시한 날로부터 7일 후부터 효력이
                            발생합니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>

                    <TermsOfUseTitle>
                        <FontWhiteGreyNormalMedium>문의 및 고객 지원</FontWhiteGreyNormalMedium>
                    </TermsOfUseTitle>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>
                            서비스 이용과 관련된 문의사항이 있을 경우, 사용자는 dumpin@naver.com으로 이메일을 보내
                            문의할 수 있습니다. 덤핀(dump&apos;in)은 사용자의 문의에 신속하고 정확하게 답변할 의무를
                            가집니다.
                        </FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>
                    <TermsOfUseDescription>
                        <FontWhiteGreyNormalMedium>- 공고일자: 2023년 00월 00일</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>- 시행일자: 2023년 00월 00일</FontWhiteGreyNormalMedium>
                    </TermsOfUseDescription>
                </TermsOfUseList>
            </TermsOfUseScrollView>
        </TermsOfUseSafeContainer>
    );
}
