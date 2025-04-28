import HeaderMain from "./layouts/HeaderMain";
import Footer from "./layouts/Footer";

import st from './modules/home.module.scss';

function Home() {
    return <>
        <HeaderMain></HeaderMain>
        <div className={st.mainCont01}>
            <div className={st.inner}>
                <img src="/images/main/mainCont01_bg.png" alt="" />
            </div>
            <div className={st.mvTxt}>
                <p className={st.mvTitle}>더 나은 생각으로,<br/>더 높은 이상을 실현합니다</p>
                <p className={st.mvDesc}>
                    사업의 목표는 성장입니다.<br/>
                    세무업의 목표 또한 고객님 사업의 성장입나다.<br/>
                    같은 목표를 공유할 때 고객님과 저희의 낭만은 실현됩니다.
                </p>
            </div>
            <div className={st.scrollDown}>
                <p className={st.scTxt}>Scroll Down</p>
                <span className={st.ico}></span>
            </div>
        </div>
        <div className={st.mainCont02}>
            service area
        </div>
        <div className={st.mainCont03}>
            profile area
        </div>
        <div className={st.mainCont04}>
            board area
        </div>
        <div className={st.mainCont05}>
             consult area
        </div>
        <Footer></Footer>
    </>;
}

export default Home;
