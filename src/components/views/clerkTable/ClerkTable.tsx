import React from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './ClerkTable.css';

interface DataType {
    key: React.Key;
    WaitingToAnotherSystem: string;
    WaitingToCustomer: string;
    treatment: number;
    deviation: React.ReactNode;
    tasks: React.ReactNode;
}

interface ExpandedDataType {
    key: React.Key;
    mishoot: string;
    lacoah: string;
    status: string;
    openingDate: string;
    closingDate: string;
    treatment: number;
}
const expandedRowRender = () => {
    const columns: ColumnsType<ExpandedDataType> = [
        { title: 'משרות', dataIndex: 'mishoot', key: 'mishoot' },
        { title: 'לקוח', dataIndex: 'customer', key: 'customer' },
        { title: 'פקידים', dataIndex: 'clerks', key: 'clerks' },
        { title: 'סטטוס', dataIndex: 'status', key: 'status' },
        { title: 'עדיפות', dataIndex: 'favorite', key: 'favorite' },
        { title: 'פתיחת משימה', dataIndex: 'openingDate', key: 'openingDate' },
        { title: 'סיום מיועד למשימה', dataIndex: 'closeDate', key: 'closeDate' },
        { title: 'משך טיפול', dataIndex: 'treatment', key: 'treatment' },
    ];

    const data: ExpandedDataType[] = [
        {
            key: '1',
            mishoot: 'תוכנית אינטרנט גבר',
            lacoah: 'ישראל ישראלי',
            status: 'חדש',
            openingDate: '23/08/23',
            closingDate: '14/09/23',
            treatment: 15,
        },
        {
            key: '2',
            mishoot: 'מעקב איסור',
            lacoah: '',
            status: '',
            openingDate: '',
            closingDate: '',
            treatment: 8,
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
};

const columns: ColumnsType<DataType> = [
    {
        title: <div style={{ textAlign: 'center' }}><span style={{ padding: '0 0px' }}>משימות</span></div>,
        dataIndex: 'tasks',
        key: 'tasks',
        align: 'right',
    },
    {
        title: (
            <span className="ant-table-cell-divider-right divider-text" style={{ padding: '0' }}>
                <span style={{ marginRight: '125px' }}>בחריגה</span>
                <div className="divider-line"></div>
                <div className="divider-column-parts">
                    <div style={{ textAlign: 'center' }}> סהכ</div>
                    <div style={{ textAlign: 'center' }}> עד 7 </div>
                    <div style={{ textAlign: 'center' }}> עד 21</div>
                    <div style={{ textAlign: 'center' }}> 21 ומעלה </div>
                </div>
            </span >
        ),
        dataIndex: 'deviation',
        key: 'deviation',
        align: 'right',
        width: '300px'
    },
    {
        title: <div style={{ textAlign: 'center' }}><span className="ant-table-cell-divider-right treatment ">בטיפול</span></div>,
        dataIndex: 'treatment',
        key: 'treatment',
        align: 'center'
    },
    {
        title: <div style={{ textAlign: 'center' }}><span style={{ padding: '0 5px' }}>ממתין ללקוח</span></div>,
        dataIndex: 'WaitingToCustomer',
        key: 'WaitingToCustomer',
        align: 'right',
    },
    {
        title: <div style={{ textAlign: 'center' }}><span style={{ padding: '0 5px' }}>ממתין למערכת אחרת</span></div>,
        dataIndex: 'WaitingToAnotherSystem',
        key: 'WaitingToAnotherSystem',
        align: 'right',
    },




];
const data: DataType[] = [
    {
        key: '1',
        WaitingToAnotherSystem: '15',
        WaitingToCustomer: '15',
        treatment: 15,
        deviation: '15',
        tasks: (
            <div style={{ textAlign: 'center' }}>
                <span>תביעת אינטרנט גבר</span>
            </div>
        ),
    },

];


const ClerkTable: React.FC = () => {
    return (
        <div dir="rtl">
            <Table columns={columns} dataSource={data}

                expandable={{ expandedRowRender }}
            />
        </div>
    );
};

export default ClerkTable;
