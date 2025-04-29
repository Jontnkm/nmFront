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
                    </p>
                    <p>
                        <span>주소 <em>서울특별시 강남구 테헤란로 70길 15, 1층 (낭만빌딩)</em></span>
                    </p>
                    <p>
                        <span>대표번호 <em>000-0000-0000</em></span>
                    </p>
                    <p>
                        <span>이메일 <em>nangman@naver.com</em></span>
                    </p>
                    <p className={st.cpryt}>
                        Copyright ⓒ STANDARD All Rights Reserved.
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
    </>;
}

export default Footer;
