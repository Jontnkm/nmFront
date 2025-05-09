import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/prof.module.scss';
import comm from '../modules/comm.module.scss';

function Professional() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            협력전문가

                            <span className={comm.pageDesc}>
                                최고 수준의 전문성을 갖춘<br/>
                                낭만의 협력 전문가들이 합께 합니다.
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
                                    <a href="javascript:void(0)">협력전문가</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.profList}>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="/images/common/prof_thumb.png" alt="" />
                                            <p className={style.title}>
                                                홍길동
                                                <span>
                                                    <em>회계사</em>
                                                    <em>협력전문가</em>
                                                </span>
                                            </p>
                                            <p className={style.date}>
                                                이력이 들어가는 자리입니다.
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

export default Professional;
