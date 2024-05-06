import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    PrivacyPolicyDescription,
    PrivacyPolicyList,
    PrivacyPolicySafeContainer,
    PrivacyPolicyScrollView,
    PrivacyPolicyTitle,
} from 'styles/layout/my-page/MyActivity/PrivacyPolicy.style';
import { HeaderLeftContainer, RowContainer } from 'styles/layout/reuse/header/Header.style';
import { FontWhiteGreyNormalMedium, FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function PrivacyPolicy() {
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
                        <FontWhiteNormalMedium>개인정보 처리방침</FontWhiteNormalMedium>
                    </RowContainer>
                );
            },
        });
    }, [navigation]);
    return (
        <PrivacyPolicySafeContainer>
            <PrivacyPolicyScrollView>
                <PrivacyPolicyList>
                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>1. 개인정보 처리방침</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            개인정보취급방침 덤핀(dump&apos;in)(이하 &quot;회사&quot;라 합니다)은 고객님의 개인정보를
                            중요시하며, &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
                            회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
                            이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                            개인정보취급방침을 개정하는 경우 앱 초기 화면에 공지하겠습니다.
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>2. 수집하는 개인정보의 항목</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 서비스 제공을 위해 다음 항목 중 최소한의 개인정보를 수집합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; 1) 회원가입 시 수집되는 개인정보</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; 소셜 계정 이메일</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; 2) 별도로 수집되는 개인정보</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp;&emsp; &#8226; 각 항목 또는 추가적으로 수집이 필요한 개인정보 및 개인정보를 포함한
                            자료는 이용자 응대 과정과 서비스 내부 알림 수단 등을 통해 별도의 동의 절차를 거쳐 요청
                            수집될 수 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp;&emsp; &#8226; 서비스 이용 과정에서 이용 기록, 로그 기록이 자동으로 수집될 수
                            있습니다.
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>3. 수집한 개인정보의 처리 목적</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            수집된 개인정보는 다음의 목적에 한해 이용됩니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 가입 및 탈퇴 의사 확인, 회원 식별 및 관리
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 개인정보 및 관심에 기반한 이용자 친화적 서비스 제공 및 기존, 신규 시스템 개발,
                            유지, 개선
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 불법 약관 위반 게시물 게시와 같은 부정행위 방지를 위한 운영 시스템 개발, 유지,
                            개선
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 4) 문의, 제휴 문의, 광고 문의 등 요청 관련 응대 및 처리
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 5) 회원관리, 서비스 운영 및 유지보수를 위한 통계 자료 도출
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>4. 개인정보의 제3자 제공</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 이용자의 동의, 법률의 특별한
                            규정(개인정보보호법, 제 17조 및 제 18조)에 해당하는 경우에만 개인정보를 제3자에게 제공하고
                            그 이외에는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            회사는 계약의 이행을 위하여 최소한의 개인정보만 제공하고 있으며, 개인정보를 제 3자에게
                            제공해야 하는 경우 사전에 이용자에게 해당 사실을 알리고 동의를 구하도록 하겠습니다. 다만,
                            다음의 경우는 예외로 하고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>&emsp; &#8226; 법령의 규정에 의한 경우</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; &#8226; 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            회사가 제공하는 서비스를 통하여 신청 및 결제가 이루어진 경우 상담 등 거래 당사자간 원활한
                            의사소통 및 발송 등 거래이행을 위하여 관련된 정보를 필요한 범위 내에거 거래 당사자에게
                            제공합니다.
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>5. 개인정보 처리의 위탁</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 원활한 개인정보 업무처리와 보안성 높은 서비스 제공을 위하여, 신뢰도가 검증된 다음
                            회사 및 서비스에 개인정보 관련 업무 처리를 위탁하고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            회사는 위탁계약 체결 시 위탁업무 수행목적 외 개인정보 처리금지, 기술적• 관리적 보호조치,
                            재위탁 제한, 수탁자에 대한 관리• 감독 등에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가
                            개인정보를 안전하게 처리하는 지를 감독하고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) AWS(아마존 웹 서비스): 서비스 시스템 제공, 데이터 관리 및 보관
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>&emsp; 2) Kakao: 개인정보(소셜로그인)</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) Naver : 개인정보(소셜로그인) 및 시스템 운영(지도 관련 데이터 수집)
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>&emsp; 4) Apple: 개인정보(소셜로그인)</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 5) Google Analytics: 서비스 이용 행태 분석
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>6. 수집한 개인정보의 보관 및 파기</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 서비스를 제공하는 동안 개인정보 처리방침 및 관련법에 의거하여 회원의 개인정보를
                            지속적으로 관리 및 보관합니다. 탈퇴 및 동의 철회 등 개인정보 수집 및 이용 목적이 달성될 경우
                            수집된 개인정보는 즉시 파기하고 있으며, 내부 방침에 따라 일정 기간 보관 후 파기하는 정보는
                            아래와 같습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 회원 탈퇴시 개인정보는 탈퇴 시점으로부터 14일간 보관 후 파기합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 아래의 정보는 비식별화하여 일정 기간 보관 후 파기합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp;&emsp; &#8226; 비식별화란? 일방향 암호화 처리를 통해 개인정보를 익명 처리하는 과정을
                            말합니다. 비식별화된 정보는 복호화가 불가능하며, 회사를 포함하여 누구라도 이 정보로 개인을
                            식별하거나 유추할 수 없습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp;&emsp; &#8226; 연계정보 (CI) : 탈퇴 시점으로부터 최대 3개월
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 아래의 정보는 수집 시점으로부터 최대 3개월간 보관 후 파기합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>&emsp;&emsp; &#8226; 이용 기록</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>&emsp;&emsp; &#8226; 로그 기록</FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 4) 1년 이상 로그인 및 접속을 하지 않은 회원의 경우 휴면 계정으로 전환됩니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            ※회사는 위와 같이 파기 사유가 발생한 개인정보는 지체없이 재생이 불가능한 방법으로
                            파기합니다. 전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록 파기합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            ※위 항에도 불구하고 법령에 의해 개인정보를 보존해야 하는 경우, 해당 개인정보는 물리적,
                            논리적으로 분리하여 해당 법령에서 정한 기간에 따라 저장합니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>7. 정보주체의 권리, 의무 및 행사</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회원은 언제든지 서비스 내부에서 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴할 수 있으며,
                            정보보호팀 이메일(dumpin@naver.com)을통해 열람, 정정, 삭제, 처리 정지 요구 등의 권리를
                            행사할 수 있습니다. 이에 대해 회사는 지체없이 조치하겠습니다.
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>8. 개인정보의 안전성 확보조치</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 관리적 조치 : 내부관리계획 수립, 시행, 전담조직 운영, 정기적 직원교육
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 기술적 조치 : 개인정보처리시스템 동의 접근 권한 관리, 접근통제시스템설치,
                            개인정보의 암호화, 보안프로그램 설치 및 갱신
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 물리적 조치 : 전산실 등의 접근 통제
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>9. 개인정보에 관한 책임자 및 서비스</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 회원의 불만처리
                            및 피해구제, 열람청구 등을 위하여 개인정보 보호책임자를 지정하고 정보보호팀을 운영하고
                            있습니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 개인정보보호 책임자 소속 및 개인정보보호 담당 부서 : 정보보호팀
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 정보보호팀 이메일 : dumpin@naver.com 개인정보의 암호화, 보안프로그램 설치 및 갱신
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            ※서비스 이용, 접근 제한 등의 문의는 위 창구를 통해처리되지 않습니다. 해당 문의는
                            [문의하기]를 통해 전달해주시기 바랍니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 다음 기관에 문의하시기 바랍니다.
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium />
                        <FontWhiteGreyNormalMedium>
                            &emsp; 1) 개인정보 분쟁조정위원회 : https://www.kopico.go.kr
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 2) 개인정보침해신고센터 : (국번없이)118 (https://privacy.kisa.or.kr)
                        </FontWhiteGreyNormalMedium>
                        <FontWhiteGreyNormalMedium>
                            &emsp; 3) 사이버범죄 신고시스템 : https://ecrm.police.go.kr
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>

                    <PrivacyPolicyTitle>
                        <FontWhiteGreyNormalMedium>10. 기타</FontWhiteGreyNormalMedium>
                    </PrivacyPolicyTitle>
                    <PrivacyPolicyDescription>
                        <FontWhiteGreyNormalMedium>
                            이 개인정보 처리방침은 2023년 11월 3일에 개정되었습니다.
                        </FontWhiteGreyNormalMedium>
                    </PrivacyPolicyDescription>
                </PrivacyPolicyList>
            </PrivacyPolicyScrollView>
        </PrivacyPolicySafeContainer>
    );
}
