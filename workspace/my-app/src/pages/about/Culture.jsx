import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/culture.module.scss';
import comm from '../modules/comm.module.scss';

function Culture() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            기업문화

                            <span className={comm.pageDesc}>
                                단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>
                                고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                            </span>
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
                                    <a href="javascript:void(0)">기업문화</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.listArea}>
                                <ul>
                                    {/* 모바일환경에서 6개만 노출 피씨버전일경우는 8개 노출 */}
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/main/mainCont04_img01.png" alt="" />
                                            <p className={style.title}>
                                                타이틀이 들어가는 자리입니다. 2줄 정도 노출되면 이렇게 보여집니다. 3줄 이상은 말줄임으로 대체합니다.
                                            </p>
                                            <p className={style.date}>
                                                2025-01-23
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className={comm.pagination}>
                                <ul>
                                    <li className={comm.prev}>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/paging_arrow.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className={comm.numbers}>
                                        <ul>
                                            {/* pc버전 8개 까지 mo버전 5개 까지 */}
                                            <li className={comm.active}><a href="javascript:void(0)">1</a></li>
                                            <li><a href="javascript:void(0)">2</a></li>
                                            <li><a href="javascript:void(0)">3</a></li>
                                            <li><a href="javascript:void(0)">4</a></li>
                                            <li><a href="javascript:void(0)">5</a></li>
                                            <li><a href="javascript:void(0)">6</a></li>
                                            <li><a href="javascript:void(0)">7</a></li>
                                            <li><a href="javascript:void(0)">8</a></li>
                                        </ul>
                                    </li>
                                    <li className={comm.prev}>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/paging_arrow.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>;
}

export default Culture;
