import HeaderSub from "../layouts/HeaderSub";
import Footer from "../layouts/Footer";

import lyt from '../modules/lyt.module.scss';
import style from '../modules/consult.module.scss';
import comm from '../modules/comm.module.scss';

function Consult() {
    return <>
        <HeaderSub></HeaderSub>
        <div className={lyt.wrap}>
            <div className={lyt.container}>
                <div className={lyt.subLayout}>
                    <div className={comm.subPageTitle}>
                        <p className={comm.pageTit}>
                            상담신청

                            <span className={comm.pageDesc}>
                                간단히 내용을 작성해 주시면 세금, 절세 법인전환 등 전문 세무자가 직접 연락드립니다.<br/>
                                처음 상담부터 가장 친절한 세무기장 서비스를 약속합니다.
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
                                    <a href="javascript:void(0)">문의하기</a>
                                </li>
                                <li className={comm.depth02}>
                                    <a href="javascript:void(0)">상담신청</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={comm.contents}>
                        <div className={comm.inner}>
                            <div className={style.cptForm}>
                                <div className={style.frmGroup}>
                                    <div className={style.iptTxt}>
                                        <label>이름<span className={style.required}>*</span></label>
                                        <input type="text" />
                                    </div>
                                    <div className={style.iptTxt}>
                                        <label>연락처<span className={style.required}>*</span></label>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className={style.frmGroup}>
                                    <div className={style.iptTxt}>
                                        <label>이메일<span className={style.required}>*</span></label>
                                        <input type="text" />
                                    </div>
                                    <div className={style.iptSel}>
                                        <label>업종<span className={style.required}>*</span></label>
                                        <select name="" id="">
                                            <option value="">선택</option>
                                            <option value="">data01</option>
                                            <option value="">data02</option>
                                            <option value="">data03</option>
                                            <option value="">data04</option>
                                            <option value="">data05</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={style.single}>
                                    <p>직원 유무<span className={style.required}>*</span></p>
                                    <div className={style.frmGroup}>
                                        <div className={style.iptChk}>
                                            <input type="radio" id="memberY" name="member"/>
                                            <label htmlFor="memberY">있음</label>
                                        </div>
                                        <div className={style.iptChk}>
                                            <input type="radio" id="memberN" name="member"/>
                                            <label htmlFor="memberN">없음</label>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.single}>
                                    <p>상담 내용<span className={style.required}>*</span></p>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>

                            <div className={style.policy}>
                                1. 개인 정보의 이용 목적 <br/><br/>
                                여러분이 제공해주신 개인정보는 보다 정확한 서비스를 제공하기 위해 이용되며, 이용약관에 명시된 목적 이외에 다른 용도로 <br/>
                                이용하거나 본인의 승낙 없이 제3자에게 회원정보를 제공하지 않습니다. <br/>
                                다만, 다음 각 사항에 해당하는 경우에는 예외로 제3자와 공유될 수 있습니다.<br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;1) 관계법령에 의하여 수사상의 목적으로 관계기관으로부터 요구가 있을 경우 <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;2) 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우<br/><br/>
                                개인정보를 새로이 제3자에게 제공하는 경우에는 제공 받는 자, 제공목적 및 제공할 정보의 내용을 이메일 등을 <br/>
                                통해 당사자에게 미리 고지하여 동의를 얻으며, 당사자의 동의 없이 어떠한 정보도 제공하지 않습니다.<br/><br/><br/>

                                2. 개인정보 수집항목 및 방법<br/><br/>
                                코어인싸이트는 제안 및 견적문의 메뉴를 통해 개인정보 일부를 제공받고 있습니다. <br/>
                                코어인싸이트에 제안 또는 견적문의를 하시기 위해서는 다음의 정보를 입력해주셔야 하며,선택항목을 입력하시지 않았다고 하여 <br/>
                                제안, 견적문의접수에 제한은 없습니다.<br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;-입력항목: <br/><br/><br/>

                                3. 개인 정보의 보유기간과 이용 기간 <br/><br/>
                                수집된 일부 개인정보는 코어인싸이트의 답변이 완료되기전까지 보유되며, 당사의 보다 정확한 서비스제공에 이용됩니다. 제안, <br/>
                                견적문의를 통해 접수된 내용에 대한 답변완료 또는 정보제공의 목적 달성 시에는 재생이 불가능 하도록 완전 삭제(접수내역<br/>
                                DB삭제)합니다. <br/><br/>
                            </div>
                            
                            <div className={`${style.cptForm} ${style.noMarg}`}>
                                <div className={style.frmGroup}>
                                    <div className={style.iptChk}>
                                        <input type="checkbox" id="agree"/>
                                        <label htmlFor="agree">개인정보 제공방침에 동의합니다.</label>
                                    </div>
                                    <div className={style.button}>
                                        <button type="button">상담신청</button>
                                    </div>
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

export default Consult;
