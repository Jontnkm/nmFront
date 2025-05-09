import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/culture.module.scss';
import comm from '../modules/comm.module.scss';

function CultureDetail() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={`${lyt.wrap} ${lyt.detail}`}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>{/*상세페이지일 경우 detail 클래스 추가*/}
                    <div className={comm.subPageTitle}>
                        <p className={`${comm.pageTit} ${comm.detail}`}>{/*상세페이지일 경우 detail 클래스 추가*/}
                            기업문화
                        </p>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.listDetail}>

                                <p className={style.title}>
                                    스톡옵션 세제혜택 실제로 적용하려고 하는데 이 경우는 어떻게 해야 하나요?
                                </p>

                                <div className={style.detailInfo}>
                                    <div className={style.leftArea}>
                                        <p>
                                            작성일
                                            <span>2025-01-23</span>
                                        </p>
                                    </div>
                                    <div className={style.rightArea}>
                                        <p>
                                            조회수
                                            <span>100</span>
                                        </p>
                                        <p>
                                            작성자
                                            <span>홍길동</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={style.detailCont}>
                                    {/* 개발 붙힌 후 추후 고도화 진행예정 */}
                                    <p>
                                        단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>

                                    <p>
                                        단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>

                                    <div className={style.imgArea}>
                                        <span>에디터에서 등록된 이미지 샘플</span>
                                    </div>

                                    <p>
                                        단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>

                                    <p>
                                        단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>

                                    <p>
                                        단순한 세무 대행을 넘어, 비즈니스의 성장을 함께 설계하는 파트너가 되겠습니다.<br/>고객의 내일을 함께 준비하는 든든한 조력자가 되어드리겠습니다.
                                    </p>
                                </div>

                                <div className={style.detailOption}>
                                    <a href="javascript:void(0)">
                                        목록으로
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>;
}

export default CultureDetail;
