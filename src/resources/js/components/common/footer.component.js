import React from 'react';
import { createAnchor } from '../creator/anchor.component.creator';
import '../../../css/common/footer.css';

const HowToUse = createAnchor(() => {
    return (<span>使い方</span>);
});

const TermsOfService = createAnchor(() => {
    return (<span>利用規約</span>);
});

const OperatingCompany = createAnchor(() => {
    return (<span>運営会社</span>);
});

const LogOut = createAnchor(() => {
    return (<span>ログアウト</span>);
});

const FAQ = createAnchor(() => {
    return (<span>よくあるご質問</span>);
});

const SupportDesk = createAnchor(() => {
    return (<span>よくあるご質問</span>);
});

export const Footer = props => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <p className="footer-menu-title">dレンタルについて</p>
                <ul>
                    <li><HowToUse href={'#'} /></li>
                    <li><TermsOfService href={'#'} /></li>
                    <li><OperatingCompany href={'#'} /></li>
                    <li><LogOut href={'#'} /></li>
                </ul>
                <p className="footer-menu-title">お問い合わせ</p>
                <ul>
                    <li><FAQ href={'#'} /></li>
                    <li><SupportDesk href={'#'} /></li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p className="footer-copyright-text">© D RENTAL</p>
            </div>
        </div>
    );
}