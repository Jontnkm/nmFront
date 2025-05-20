import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/education.module.scss';
import comm from '../modules/comm.module.scss';

function Board() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            게시판 제목

                            <span className={comm.pageDesc}>
                                게시판 상세내용 게시판 상세내용 게시판 상세내용 게시판 상세내용<br/>
                                게시판 상세내용 게시판 상세내용 게시판 상세내용 
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
                                    <a href="javascript:void(0)">Dept01</a>
                                </li>
                                <li className={comm.depth02}>
                                    <a href="javascript:void(0)">Dept02</a>
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
                                            <td className={style.left}>게시판 제목 01</td>
                                            <td>작성자 명</td>
                                            <td>YYYY-MM-DD</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className={style.left}>게시판 제목 02</td>
                                            <td>작성자 명</td>
                                            <td>YYYY-MM-DD</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className={style.left}>게시판 제목 03</td>
                                            <td>작성자 명</td>
                                            <td>YYYY-MM-DD</td>
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

export default Board;
