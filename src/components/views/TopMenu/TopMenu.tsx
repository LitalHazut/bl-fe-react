
import searchIcon from '../../../images/searchIcon.png';
import { ClickableText } from '../../UI/ClickableText';
import './TopMenu.css'
import { useState } from 'react';
import Avatar from '../../../images/Avatar.png';
import bituhLeumiLogo from '../../../images/bituhLeumiLogo.svg';

export const TopMenu = () => {
    const [selectedText, setSelectedText] = useState('');


    const handleClick = (text: string) => {
        setSelectedText(text);
    };
    const handleSearch = () => {
    };
    return (
        <div>
            <div style={{ position: 'absolute', top: '10px', display: 'block', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <img
                        src={Avatar}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            alignContent: 'center'
                        }} />
                    <p style={{ width: '150px', alignSelf: 'center' }}>שלום, ישראל ישראלי</p>
                    <img
                        src={bituhLeumiLogo}
                        style={{
                            width: '200px',
                            height: '40px',
                            alignContent: 'center',
                            marginRight: "52rem",
                            marginTop: '2px'
                        }} />
                </div>
            </div>
            <div style={{ marginTop: '40px' }}>
                <div style={{
                    display: 'flex', background: '#2785ba', padding: '15px', borderRadius: '10px 10px 0 0', marginBottom: '10px'
                }}>
                    <div style={{ display: 'flex', marginLeft: '400px' }}>
                        <ClickableText text="ראשי" isClicked={selectedText === "ראשי"} onClick={() => handleClick("ראשי")} />
                        <ClickableText text="לוח בקרה לטיפול" isClicked={selectedText === "לוח בקרה לטיפול"} onClick={() => handleClick("לוח בקרה לטיפול")} />
                        <ClickableText text="משימות" isClicked={selectedText === "משימות"} onClick={() => handleClick("משימות")} />
                        <ClickableText text="מסכי עזר" isClicked={selectedText === "מסכי עזר"} onClick={() => handleClick("מסכי עזר")} />
                        <ClickableText text="ניהול" isClicked={selectedText === "ניהול"} onClick={() => handleClick("ניהול")} />
                        <ClickableText text="טבלאות מערכת" isClicked={selectedText === "טבלאות מערכת"} onClick={() => handleClick("טבלאות מערכת")} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ color: 'white', fontSize: '14px', marginLeft: '10px', alignContent: 'center' }}>זהות לקוח</div>
                        <div style={{ background: 'white', borderRadius: '10px', borderColor: '#0054A6', alignContent: 'center' }}>
                            <input dir='rtl' type="text" placeholder="חפשו זהות לקוח" style={{ color: '#959595', border: '#0054A6', outline: 'none', background: 'transparent', height: '20px', width: '120px', paddingRight: '5px' }} />
                            <button onClick={handleSearch} style={{ border: 'none', background: 'none', cursor: 'pointer', height: '25px', padding: '5px', marginRight: '16px' }}>
                                <img src={searchIcon} style={{ width: '15px', height: '15px', display: 'flex' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}