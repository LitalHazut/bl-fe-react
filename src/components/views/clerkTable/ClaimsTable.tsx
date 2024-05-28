import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './ClaimsTable.css';
// import { formatDate } from '../../../utils/format';
import { getFromServer } from '../../../utils/network';
import { ClaimByActivity, MainColumns } from '../../../interfaces/ClerkTableInterfaces';


const expandedRowRender = (record: MainColumns) => {
    const handleCustomerClick = (customer: string) => {
        // Handle the click event
        console.log('Customer clicked:', customer);
    };
    const columns: ColumnsType<ClaimByActivity> = [
        { title: 'משימות', dataIndex: 'taskName', key: 'taskName' },
        {
            title: 'לקוח',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer) => (
                <span dir='ltr'
                    className="clickableText"
                    onClick={() => handleCustomerClick(customer)}
                >
                    {customer}
                </span>
            ),
        }, { title: 'פקידים', dataIndex: 'clerks', key: 'clerks' },
        { title: 'סטטוס', dataIndex: 'status', key: 'status' },
        { title: 'עדיפות', dataIndex: 'priority', key: 'priority' },
        { title: 'פתיחת משימה', dataIndex: 'openingDate', key: 'openingDate' },
        { title: 'סיום מיועד למשימה', dataIndex: 'closingDate', key: 'closingDate' },
        { title: 'משך טיפול', dataIndex: 'treatmentDuration', key: 'treatmentDuration' },
    ];



    return <Table columns={columns} dataSource={record.tasks} pagination={false} />;
};

const columns: ColumnsType<MainColumns> = [
    {
        title: <div style={{ textAlign: 'center' }}><span >משימות</span></div>,
        dataIndex: 'taskName',
        key: 'taskName',
        align: 'center',
        width: '200px'
    },
    {
        title: (
            <span className="ant-table-cell-divider-right ant-table-cell-divider-left divider-text" style={{ padding: '0' }}>
                <span style={{ marginRight: '145px' }}>בחריגה</span>
                <div className="divider-line"></div>
                <div className="divider-column-parts">
                    <div style={{ textAlign: 'center' }}>סה"כ</div>
                    <div style={{ textAlign: 'center' }}>עד 7</div>
                    <div style={{ textAlign: 'center' }}>עד 21</div>
                    <div style={{ textAlign: 'center' }}>21 ומעלה</div>
                </div>
            </span>
        ),
        dataIndex: 'deviation',
        key: 'deviation',
        align: 'right',
        width: '400px',
        render: (deviation: MainColumns['deviation']) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flexGrow: 1, textAlign: 'center' }}>{deviation.total}</div>
                <div style={{ flexGrow: 1, textAlign: 'center' }}>{deviation.upTo7}</div>
                <div style={{ flexGrow: 1, textAlign: 'center' }}>{deviation.upTo21}</div>
                <div style={{ flexGrow: 1, textAlign: 'center' }}>{deviation.over21}</div>
            </div>
        ),
    },
    {
        title: <div style={{ textAlign: 'center' }}><span>בטיפול</span></div>,
        dataIndex: 'treatment',
        key: 'treatment',
        align: 'center',
        width: '180px',
    },
    {
        title: <div style={{ textAlign: 'center' }}><span style={{ padding: '0 5px' }}>ממתין ללקוח</span></div>,
        dataIndex: 'WaitingToCustomer',
        key: 'WaitingToCustomer',
        align: 'center',
        width: '180px',

    },
    {
        title: <div style={{ textAlign: 'center' }}><span style={{ padding: '0 5px' }}>ממתין למערכת אחרת</span></div>,
        dataIndex: 'WaitingToAnotherSystem',
        key: 'WaitingToAnotherSystem',
        align: 'center',
        width: '180px',
    },




];

const ClaimsTable: React.FC = () => {
    const [data, setData] = useState<MainColumns[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFromServer('get-claims-details');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div dir="rtl" style={{ paddingLeft: '0px' }}>
            <Table
                columns={columns}
                dataSource={data}
                expandable={{
                    expandedRowRender,
                    rowExpandable: record => record.tasks && record.tasks.length > 0,
                }}
                scroll={{ y: 300 }}
                rowClassName={(record) => (record.tasks && record.tasks.length === 0 ? 'no-expand-icon' : '')}
            />
        </div>
    );
};

export default ClaimsTable;
