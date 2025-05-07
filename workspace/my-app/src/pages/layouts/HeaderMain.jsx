import { useEffect } from 'react';

import st from '../modules/header.module.scss'
function HeaderMain() {
    useEffect(() => {
        const header = document.querySelector('.cptHeader');
        window.addEventListener('scroll', function(){
            
        })
    }, [])
    
    return <>
        <div className={`${st.cptHeader} ${st.scroll}`}>
            <div className={st.inner}>
                <div className={st.leftArea}>
                    <a href="javascript:void(0)" className={st.logoBox}>
                        <img src="/images/common/nmLogo.png" className={st.white} alt="" />
                        <img src="/images/common/nmLogo_blk.png" className={st.black} alt="" />
                    </a>
                </div>
                <div className={st.rightArea}>
                    <ul>
                        <li>
                            <a href="javascript:void(0);">낭만에 대하여</a>
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">기업문화</a></li>
                                    <li><a href="javascript:void(0);">협력전문가</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);">서비스</a>
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">기업문화</a></li>
                                    <li><a href="javascript:void(0);">협력전문가</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);">전문업종</a>
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">기업문화</a></li>
                                    <li><a href="javascript:void(0);">협력전문가</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);">낭만의 기억</a>
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">기업문화</a></li>
                                    <li><a href="javascript:void(0);">협력전문가</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0);">문의하기</a>
                            <div>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">기업문화</a></li>
                                    <li><a href="javascript:void(0);">협력전문가</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
}

export default HeaderMain;
