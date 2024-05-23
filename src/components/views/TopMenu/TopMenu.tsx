
import searchIcon from '../../../images/searchIcon.png';
import { ClickableText } from '../../UI/ClickableText';
import DropdownTextElement from '../../UI/DropdownTextElement';
import './TopMenu.css'
import { useState } from 'react';


export const TopMenu = () => {
    const [selectedText, setSelectedText] = useState('');

    const optionsTasks = [
        { value: "all-tasks", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
    const managerOccupation = [
        { value: "manager-occupation", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
    const taskType = [
        { value: "task-type", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
    const clerks = [
        { value: "clerks", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
    const processDomain = [
        { value: "process-domain", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
    const processStatus = [
        { value: "process-status", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
        { value: "task-type-2", label: "סוג משימה 2" },
    ];
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
            <div style={{
                display: 'flex', justifyContent: 'center', background: '#58ACE8', padding: '10px', borderRadius: '10px 10px 0 0'
            }}>
                <DropdownTextElement
                    label="סטטוס תהליך"
                    defaultValue="process-status"
                    options={processStatus}
                />
                <DropdownTextElement
                    label="תחום תהליך"
                    defaultValue="process-domain"
                    options={processDomain}
                />
                <DropdownTextElement
                    label="פקידים"
                    defaultValue="clerks"
                    options={clerks}
                />
                <DropdownTextElement
                    label="סוג משימה"
                    defaultValue="task-type"
                    options={taskType}
                />
                <DropdownTextElement
                    label="עיסוק מנהל"
                    defaultValue="manager-occupation"
                    options={managerOccupation}
                />
                <DropdownTextElement
                    label="סניף המשימה"
                    defaultValue="all-tasks"
                    options={optionsTasks}
                />
            </div>
        </div >

    )
}