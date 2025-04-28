import HeaderMain from "./layouts/HeaderMain";
import Footer from "./layouts/Footer";

import styles from './modules/home.module.scss';

function Home() {
    return <>
        <HeaderMain></HeaderMain>
        <div className={styles.mainCont01}>
            <img src="/images/main/mainCont01_bg.png" alt="" />
            <div className={styles.txtPart}>
                텍스트 테스팅
            </div>
        </div>
        <div className={styles.mainCont02}>
            service area
        </div>
        <div className={styles.mainCont03}>
            profile area
        </div>
        <div className={styles.mainCont04}>
            board area
        </div>
        <div className={styles.mainCont05}>
             consult area
        </div>
        <Footer></Footer>
    </>;
}

export default Home;
