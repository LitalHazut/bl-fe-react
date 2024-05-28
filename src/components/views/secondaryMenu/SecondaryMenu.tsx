import DropdownTextElement from "../../UI/DropdownTextElement";
import './SecondaryMenu.css';


export const SecondaryMenu = () => {

    const missionBranch = [
        { value: "missionBranch", label: "כל הסניפים" },
        { value: "missionBranch-1", label: "סניף ראשי קריות 900" },
    ];
    const managerOccupation = [
        { value: "manager-occupation-1", label: "מנהל מחלקת גמלאות" },
    ];
    const taskType = [
        { value: "task-type", label: "כל המשימות" },
        { value: "task-type-1", label: "סוג משימה 1" },
    ];
    const clerks = [
        { value: "clerks", label: "פקידים" },
        { value: "clerks-1", label: " פקיד 1" },
    ];
    const processDomain = [
        { value: "process-domain", label: "כל המשימות" },
        { value: "process-domain-1", label: "הכל" },
    ];
    const processStatus = [
        { value: "process-status", label: "כל המשימות" },
        { value: "process-status-1", label: "פעיל, מוקפא, (ללא)" },
    ];

    return (
        <div >
            <div style={{
                display: 'flex', background: '#58ACE8', padding: '10px', gap: '65px', borderRadius: '10px 10px 0 0'
            }}>
                <DropdownTextElement
                    label="סניף המשימה"
                    defaultValue="missionBranch-1"
                    options={missionBranch}
                />
                <DropdownTextElement
                    label="עיסוק מנהל"
                    defaultValue="manager-occupation-1"
                    options={managerOccupation}
                />
                <DropdownTextElement
                    label="סוג משימה"
                    defaultValue="task-type"
                    options={taskType}
                />
                <DropdownTextElement
                    label="פקידים"
                    defaultValue="clerks"
                    options={clerks}
                />
                <DropdownTextElement
                    label="תחום תהליך"
                    defaultValue="process-domain-1"
                    options={processDomain}
                />
                <DropdownTextElement
                    label="סטטוס תהליך"
                    defaultValue="process-status-1"
                    options={processStatus}
                />




            </div>
            <div className="container">
                <div className="box">
                    <div className="number">252</div>
                    <div className="text">פתוחות</div>
                </div>
                <div className="box">
                    <div className="number">0</div>
                    <div className="text">לא מוקצות</div>
                </div>
                <div className="box">
                    <div className="number">89</div>
                    <div className="text">בחריגה</div>
                </div>
                <div className="box">
                    <div className="number">233</div>
                    <div className="text">בעדיפות</div>
                </div>
                <div className="box">
                    <div className="number">46</div>
                    <div className="text">בטיפול</div>
                </div>
                <div className="box">
                    <div className="number">73</div>
                    <div className="text">מושהות</div>
                </div>
            </div>

        </div >

    )
}