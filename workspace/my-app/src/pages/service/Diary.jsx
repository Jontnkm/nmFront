import HeaderMain from "../layouts/HeaderMain";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/service.module.scss';
import comm from '../modules/comm.module.scss';

function Diary() {
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
                                    <a href="javascript:void(0)">기장 대리 서비스</a>
                                </li>
                            </ul>
                        </div>

                        <p className={lyt.title}>
                            기장 대리 서비스
                        </p>
                    </div>
                </div>
                <div className={lyt.subLayout}>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.serviceContent}>
                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>기장대리 서비스란</p>
                                    </div>
                                    <div className={style.right}>
                                        <p>
                                            장부는 숫자로 적힌 기업의 일기입니다. 매일 쓴 기록은 생생히 남는 반면, 미루다 몰아 쓰면 기억이 흐려집니다.<br/>방학 숙제로 몰아 쓴 일기는 그 날의 날씨가 어땠는지 기억이 나지 않는 것 처럼요. 기장 업무의 주기가 짧을수록 양질의 장부 작성 및 신속한 세무 현황 진단이 가능해집니다.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.box}>
                                    <div className={style.left}>
                                        <p>월 분석 보고서 <br/>제공 서비스</p>
                                    </div>
                                    <div className={style.right}>
                                        <p>
                                            장부 작성(기장)은 일반적으로 부가세, 법인세, 종소세 신고와 함께 이뤄집니다.<br/>그러나 저희 낭만은 월 분석보고서를 통해 기장 주기를 월 단위로 단축하여 양질의 기장 서비스를 제공합니다.
                                        </p>
                                        <p>
                                            매월 사업분석 보고, 매출 및 매입 보고, 인건비 보고를 통해 기업의 운영 상황을 한 눈에<br/>확인할 수 있도록 하고 있습니다. 또한 과거 기간과의 비교 분석을 통해 세무적 특이사항을 적시에 파악하여<br/>대처할 수 있도록 도와드립니다.
                                        </p>
                                        <p>
                                            <img src="/images/sub/diary_img01.png" alt="" />
                                        </p>
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

export default Diary;