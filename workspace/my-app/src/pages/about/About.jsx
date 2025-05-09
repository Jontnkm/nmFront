import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/about.module.scss';
import comm from '../modules/comm.module.scss';

function About() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            About us
                        </p>
                        <div className={comm.breadCrumb}>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <img src="/images/common/homeBtn.svg" alt="" />
                                    </a>
                                </li>
                                <li className={comm.depth01}>
                                    <a href="javascript:void(0)">낭만에 대하여</a>
                                </li>
                                <li className={comm.depth02}>
                                    <a href="javascript:void(0)">About us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.banner}>
                                <img src="/images/sub/about_img01.png" alt="" className={style.forPc}/>
                                <img src="/images/sub/about_img01_mo.png" alt="" className={style.forMo}/>
                                <div className={style.txtGroup}>
                                    <p className={style.title}>
                                        Better ideas Higher ideals
                                    </p>
                                    <p className={style.subTitle}>
                                        '더 나은 생각, 더 높은 이상'이라는 슬로건 아래,<br/>
                                        고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p className={style.parha01}>
                                    낭만(浪漫)은 사전적으로 현실에 매이지 않고 감상적이고 이상적으로 사물을 대하는 태도나 심리. 또는 그런 분위기를 뜻합니다.<br/>
                                    프랑스어 로망(roman)을 물결 낭(浪)과 질펀할 만(漫)을 써서 한자음 소리대로 표기한 단어입니다.<br/>
                                    저는 이 낭만이란 말을 참 좋아합니다. 2023년 경으로 기억합니다.<br/>
                                    ‘이게 낭만이지’라는 말이 유행하기 시작하던 무렵 그렇다면 ‘세무업의 낭만은 무엇인가’란 고민을 했습니다.<br/>
                                    고민 끝에 내린 답은 고객의 주머니를 풍족하게 하여 여유를 안겨드리는 것, 그리고 그 여유를 바탕으로 고객이 더욱 사업 성장에 집중할 수 있게 하는 것이었습니다.<br/>이 생각은 저희의 변치 않을 목표가 되었습니다.
                                </p>

                                <p className={`${style.parha02} ${style.bold}`}>
                                    그래서 세무회계 ‘낭만’은 본래 낭만의 한자와 다르게 주머니 낭(囊)에 찰 만(滿)으로 적습니다.<br/>
                                    이는 현실의 제약을 넘어 보다 더 이상적인 세무서비스로 고객의 주머니를 가득 차게 하겠다는 철학이자 약속입니다.
                                </p>

                                <p className={style.parha03}>
                                    사업 성장에 기반한 세무서비스와 절세 방안을 공유하여 고객님께 여유를 안겨드립니다.<br/>
                                    여유롭게 사업에 집중하시면서 고객님의 사업이 성장합니다.<br/>
                                    사업이 성장하면 더 다양한 절세전략과 더 큰 절세액 실현이 가능해집니다.<br/>
                                    여유자금이 발생하고 자산증대를 위한 재투자를 하시면서 또 다른 컨설팅 요소와 절세 전략이 발생합니다.<br/>
                                    이런 끊임없는 선순환이 저희가 생각하는 낭만의 실현입니다.
                                </p>

                                <p className={style.parha04}>
                                    Better ideas, Higher ideals라는 슬로건 아래 더 나은 생각으로 더 이상적인 세무업의 낭만을 실현하고자 합니다.<br/>
                                    더 나은 생각은 전에 없던 세무서비스를 탄생시키며, 기술의 발전은 인력과 시간의 제약을 깨고 이를 점차 가능케 하고 있습니다.<br/>
                                    고객님의 주머니를 가득하게라는 목표하에 저희의 세무서비스는 계속 발전할 것입니다.<br/>
                                    고객님과의 낭만을 꿈꾸면서요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>;
}

export default About;
