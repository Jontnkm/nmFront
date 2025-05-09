import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/education.module.scss';
import comm from '../modules/comm.module.scss';

function Education() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            학원/교육업

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
                                    <a href="javascript:void(0)">학원/교육업</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.cptTable}>
                                <table className={style.tbData}>
                                    <colgroup>
                                        <col width="10%"/>
                                        <col width="auto"/>
                                        <col width="15%"/>
                                        <col width="15%"/>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th className={style.left}>제목</th>
                                            <th>작성자</th>
                                            <th>작성일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className={style.left}>학원업 사업자등록 주요사항</td>
                                            <td>홍길동</td>
                                            <td>2025-01-23</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className={style.left}>학원업 강사고용 유의사항</td>
                                            <td>홍길동</td>
                                            <td>2025-01-23</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className={style.left}>학원업 교육청 연계 세무사항</td>
                                            <td>홍길동</td>
                                            <td>2025-01-23</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default Education;
