import HeaderMain from "../layouts/HeaderMain";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/service.module.scss';
import comm from '../modules/comm.module.scss';

function Transfer() {
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
                                    <a href="javascript:void(0)">양도/상속/증려</a>
                                </li>
                            </ul>
                        </div>

                        <p className={lyt.title}>
                            양도/상속/증려
                        </p>
                    </div>
                </div>
                <div className={lyt.subLayout}>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.serviceContent}>
                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>양도/상속/증여의 특징</p>
                                    </div>
                                    <div className={style.right}>
                                        <ul>
                                            <li><span>1)</span> <span>정기적으로 발생하는 세금이 아닌 해당 사유 발생 시에 비정기적으로 발생하는 세금입니다.</span></li>
                                            <li><span>2)</span> <span>다루는 금액이 큰 경우가 많습니다.</span></li>
                                            <li><span>3)</span> <span>수 년 전, 많게는 십 년 이상의 과거 기간의 검토가 필요합니다.</span></li>
                                            <li><span>4)</span> <span>다른 세금에 비해 상대적으로 복잡한 사례가 많습니다.</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>업무 절차</p>
                                    </div>
                                    <div className={style.right}>
                                        <ul>
                                            <li><span>1)</span> <span>복잡성이 높고 금액이 큰 세금 항목이기에 최소 3회 이상의 검토로 정확한 세액 산출을 최우선으로 합니다.</span></li>
                                            <li><span>2)</span> <span>관련 공제 및 절세 항목의 별도 검토로 누락 없는 절세 혜택을 적용합니다.</span></li>
                                            <li><span>3)</span> <span>변수가 많고 조사 가능성이 상대적으로 높은 항목으로, 추후 과세관청에 대한 대응을 다각적으로 고려해 진행합니다.</span></li>
                                        </ul>
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

export default Transfer;