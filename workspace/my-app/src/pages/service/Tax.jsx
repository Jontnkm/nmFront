import HeaderMain from "../layouts/HeaderMain";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/service.module.scss';
import comm from '../modules/comm.module.scss';

function Tax() {
    return <>
        <HeaderMain></HeaderMain>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                {/* 특수케이스 */}
                <div className={`${lyt.specSubVisual} ${lyt.type01}`}>
                    <div>
                        <div className={lyt.breadCrumb}>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <img src="/images/common/homeBtn.svg" alt="" />
                                    </a>
                                </li>
                                <li className={lyt.depth01}>
                                    <a href="javascript:void(0)">서비스</a>
                                </li>
                                <li className={lyt.depth02}>
                                    <a href="javascript:void(0)">세금환급</a>
                                </li>
                            </ul>
                        </div>

                        <p className={lyt.title}>
                            세금환급
                        </p>
                    </div>
                </div>
                <div className={lyt.subLayout}>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.serviceContent}>
                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>세금환급 서비스란</p>
                                    </div>
                                    <div className={style.right}>
                                        <p>
                                            지나간 과거는 되돌릴 수 없다지만 과거 더 낸 세금은 되돌려 받을 수 있습니다. 4천여 건, 누적 환급액 180억의 환급 성공 노하우를 보유한 전문 세무사가 과거의 손해를 지금 다시 보상받도록 도와드립니다.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>성공사례</p>
                                    </div>
                                    <div className={style.right}>
                                        <p>
                                            <img src="/images/sub/diary_img01.png" alt="" />
                                        </p>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>환급절차</p>
                                    </div>
                                    <div className={style.right}>
                                        <ul>
                                            <li><span>1)</span> <span>무료 환급 진단</span></li>
                                            <li><span>2)</span> <span>진단결과 안내</span></li>
                                            <li><span>3)</span> <span>진행 확정 및 계약</span></li>
                                            <li><span>4)</span> <span>세무서 환급 신청 접수</span></li>
                                            <li><span>5)</span> <span>2개월 간 소명 진행</span></li>
                                            <li><span>6)</span> <span>최종 환급</span></li>
                                        </ul>
                                        <span>
                                            * 최초 환급액 검토는 무료이며, 최종 환급에 성공한 경우에만 성공보수가 발생합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Tax;