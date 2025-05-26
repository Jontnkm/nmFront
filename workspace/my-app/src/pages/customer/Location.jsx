import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/location.module.scss';
import comm from '../modules/comm.module.scss';

function Location() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            찾아오시는 길
                        </p>
                        <div className={comm.breadCrumb}>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <img src="/images/common/homeBtn.svg" alt="" />
                                    </a>
                                </li>
                                <li className={comm.depth01}>
                                    <a href="javascript:void(0)">문의하기</a>
                                </li>
                                <li className={comm.depth02}>
                                    <a href="javascript:void(0)">찾아오시는 길</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.mapArea}>
                                <div className={style.map}>
                                    
                                </div>
                            </div>
                            <div className={style.locationInfo}>
                                <ul>
                                    <li>
                                        <span>본사 위치</span>
                                        <p>서울시 금천구 디지털로 178, A동 506호(현대지식산업센터 가산퍼블릭)</p>
                                    </li>
                                    <li>
                                        <span>대표 전화</span>
                                        <p>070-4077-4374</p>
                                    </li>
                                    <li>
                                        <span>주변 버스</span>
                                        <p>142번 / 252번 / 9600번 / 75번번</p>
                                    </li>
                                    <li>
                                        <span>주변 지하철역</span>
                                        <p>가산디지털단지역 (1호선, 7호선)</p>
                                    </li>
                                    <li>
                                        <span>주차 안내</span>
                                        <p>
                                            여의도 공영주차장
                                            <span>※ 요금 : 시간당 6,000원</span>
                                        </p>
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

export default Location;
