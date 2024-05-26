
import searchIcon from '../../../images/searchIcon.png';
import { ClickableText } from '../../UI/ClickableText';
import { SecondaryMenu } from '../secondaryMenu/SecondaryMenu';
import './TopMenu.css'
import { useState } from 'react';


export const TopMenu = () => {
    const [selectedText, setSelectedText] = useState('');


    const handleClick = (text: string) => {
        setSelectedText(text);
    };
    const handleSearch = () => {
    };
    return (
        <div >
            <div style={{
                display: 'flex', justifyContent: 'center', background: '#2785ba', padding: '15px', borderRadius: '10px 10px 0 0', marginBottom: '10px'
            }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ background: 'white', borderRadius: '10px', borderColor: '#0054A6', alignContent: 'center' }}>
                        <button onClick={handleSearch} style={{ border: 'none', background: 'none', cursor: 'pointer', height: '15px', padding: '5px', marginRight: '16px' }}>
                            <img src={searchIcon} style={{ width: '15px', height: '15px' }} />
                        </button>
                        <input dir='rtl' type="text" placeholder="חפשו זהות לקוח" style={{ color: '#959595', border: '#0054A6', outline: 'none', background: 'transparent', height: '20px', width: '120px', padding: '5px' }} />
                    </div>
                    <div style={{ color: 'white', fontSize: '14px', marginLeft: '10px', alignContent: 'center' }}>זהות לקוח</div>
                </div>


                <div style={{ display: 'flex', marginLeft: '400px' }}>
                    <ClickableText text="טבלאות מערכת" isClicked={selectedText === "טבלאות מערכת"} onClick={() => handleClick("טלבאות מערכת")} />
                    <ClickableText text="ניהול" isClicked={selectedText === "ניהול"} onClick={() => handleClick("ניהול")} />
                    <ClickableText text="מסכי עזר" isClicked={selectedText === "מסכי עזר"} onClick={() => handleClick("מסכי עזר")} />
                    <ClickableText text="משימות" isClicked={selectedText === "משימות"} onClick={() => handleClick("משימות")} />
                    <ClickableText text="לוח בקרה לטיפול" isClicked={selectedText === "לוח בקרה לטיפול"} onClick={() => handleClick("לוח בקרה לטיפול")} />
                    <ClickableText text="ראשי" isClicked={selectedText === "ראשי"} onClick={() => handleClick("ראשי")} />
                </div>
            </div >
            <SecondaryMenu />
        </div >

    )
}