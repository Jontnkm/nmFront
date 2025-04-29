import HeaderMain from "./layouts/HeaderMain";
import Footer from "./layouts/Footer";

import lyt from './modules/lyt.module.scss';
import st from './modules/home.module.scss';
import comm from './modules/comm.module.scss';

function Home() {
    return <>
        <HeaderMain></HeaderMain>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
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
                    <p className={st.eyeBrow}>Service</p>
                    <p className={st.title}>낭만의 차별화된 세무 회계 서비스</p>
                    <div className={st.flipArea}>
                        <ul>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont02_img01.png" alt="" />
                                    <span>기장 대리 서비스</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont02_img02.png" alt="" />
                                    <span>세금 환급</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont02_img03.png" alt="" />
                                    <span>양도 / 상속 / 증여</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={st.mainCont03}>
                    <div className={st.inner}>
                        <div className={st.leftArea}>
                            <img src="/images/main/mainCont03_img01.png" alt="" />
                        </div>
                        <div className={st.rightArea}>
                            <div className={st.profTit}>
                                <p className={st.txt}>
                                    Better ideas<br/>
                                    Higher ideals
                                </p>
                                <a href="javascript:void(0)">
                                    낭만에 대하여
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st.mainCont04}>
                    <div className={st.contTitArea}>
                        <div className={st.left}>
                            <div className={st.eyeBrow}>Blog</div>
                            <div className={st.title}>전문가가 전하는 세무 지식</div>
                        </div>
                        <div className={st.right}>
                            <a href="javascript:void(0)" className={st.detailBtn}>전체 블로그 보러가기</a>
                        </div>
                    </div>

                    <div className={st.contInner}>
                        <ul>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont04_img01.png" alt="" />
                                    <p className={st.title}>
                                        타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                    </p>
                                    <p className={st.date}>
                                        2025-01-23
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont04_img01.png" alt="" />
                                    <p className={st.title}>
                                        타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                    </p>
                                    <p className={st.date}>
                                        2025-01-23
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont04_img01.png" alt="" />
                                    <p className={st.title}>
                                        타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                    </p>
                                    <p className={st.date}>
                                        2025-01-23
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <img src="/images/main/mainCont04_img01.png" alt="" />
                                    <p className={st.title}>
                                        타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                    </p>
                                    <p className={st.date}>
                                        2025-01-23
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={comm.consultBox}>
                    <div className={comm.inner}>
                        <div className={comm.left}>
                            <p className={comm.eyeBrow}>Contact</p>
                            <p className={comm.title}>복잡한 세무,<br/>혼자 고민하지 마세요.</p>
                            <p className={comm.desc}>상담내용 남겨주시면 낭만에서 빠르게 연락 드리겠습니다.</p>
                        </div>
                        <div className={comm.right}>
                            <a href="javascript:void(0);">
                                상담 신청 하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>;
}

export default Home;
