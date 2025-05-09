import st from '../modules/footer.module.scss';

function Footer() {
    return <>
        <div className={st.cptFooter}>
            <div className={st.inner}>
                <div className={st.left}>
                    <img src="/images/common/footer_logo.png" alt="" />
                    <p>
                        <span>세무회계 낭만</span>
                        <span>대표 <em>고수일</em></span>
                        <span>사업자번호 <em>166-12-02280</em></span>
                    </p>
                    <p className={st.address}>
                        <span><em>주소</em><em>서울특별시 금천구 디지털로 178, A동 506호(현대 지식산업센터 가산 퍼블릭)</em></span>
                    </p>
                    <p>
                        <span>대표번호 <em>070-4077-4374</em></span>
                    </p>
                    <p>
                        <span>이메일 <em>nangmantax@daum.net</em></span>
                    </p>
                    <p className={st.cpryt}>
                        Copyright ⓒ NangMan All Rights Reserved.
                    </p>
                </div>
                <div className={st.right}>
                    <div className={st.rightInner}>
                        <div className={st.snsLine}>
                            <ul>
                                <li className={st.blog}><a href="javascript:void(0);"></a></li>
                                <li className={st.kakao}><a href="javascript:void(0);"></a></li>
                                <li className={st.instagram}><a href="javascript:void(0);"></a></li>
                            </ul>
                        </div>
                        <div className={st.policy}>
                            <a href="javascript:void(0);">개인정보처리방침</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={st.cptQuick}>
            <div className={st.inner}>
                <div className={st.quickList}>
                    <ul>
                        <li><a href="javascript:void(0)" className={st.consult}><span className="hidden">상담하기</span></a></li>
                        <li><a href="javascript:void(0)" className={st.naver}><span className="hidden">네이버블로그</span></a></li>
                        <li><a href="javascript:void(0)" className={st.kakao}><span className="hidden">카카오채널</span></a></li>
                        <li><a href="javascript:void(0)" className={st.instagram}><span className="hidden">인스타그램</span></a></li>
                        <li><a href="javascript:void(0)" className={st.top}><span className="hidden"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
}

export default Footer;
