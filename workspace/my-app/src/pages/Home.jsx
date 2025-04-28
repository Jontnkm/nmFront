import HeaderMain from "./layouts/HeaderMain";
import Footer from "./layouts/Footer";

import './modules/main.scss';

function Home() {
    return <>
        <HeaderMain></HeaderMain>
        <div className="mainCont01">
            <img src="/images/main/mainCont01_bg.png" alt="" />
        </div>
        <div className="mainCont02">
            test02
        </div>
        <div className="mainCont03">
            test03
        </div>
        <div className="mainCont04">
            test04
        </div>
        <div className="mainCont05">
            test05
        </div>
        <Footer></Footer>
    </>;
}

export default Home;
