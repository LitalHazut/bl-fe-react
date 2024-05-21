import React from 'react';
import { Form, Input, Button, DatePicker, Select, Typography } from 'antd';
import moment from 'moment';  // Ensure moment is imported
import bituhLeumiLogo from '../../../images/bituhLeumiLogo.svg';

const { Option } = Select;
const { Title } = Typography;

interface FormValues {
    oid: string;
    birthDate: moment.Moment;
    childrenBeforeBirth: number;
    childrenActualBirth: number;
    submissionDate: moment.Moment;
    branch: string;
    upload?: any;
}

export const AddMaternityGrant: React.FC = () => {
    const [form] = Form.useForm<FormValues>();

    const onFinish = (values: FormValues) => {
        console.log('Form values:', values);
    };

    const inputStyle = {
        width: '350px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={{
            direction: 'rtl', padding: '24px', margin: '0 auto', borderRadius: '12px', backgroundColor: '#EEF2F7'
        }}>
            <img src={bituhLeumiLogo} alt="Bituh Leumi Logo" style={{ display: 'block', margin: '0 auto 24px' }} />
            <Title level={4} style={{ textAlign: 'right' }}>הוספת אירוע חדש</Title>
            <Title level={5} style={{ textAlign: 'right', marginBottom: '18px' }}>פרטי אירוע הלידה</Title>
            <Form
                form={form}
                name="birth_event_form"
                onFinish={onFinish}
                layout="vertical"
                style={{ gap: '12px' }}
            >
                <Form.Item
                    name="oid"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input placeholder="תז מבוטחת (OID)" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="birthDate"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <DatePicker format="DD-MM-YYYY" style={{ ...inputStyle, width: '100%' }} placeholder="תאריך לידה בפועל" />
                </Form.Item>

                <Form.Item
                    name="childrenBeforeBirth"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input type="number" placeholder="מספר ילדים בלידה" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="childrenActualBirth"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input type="number" placeholder="מספר ילדים בלידה בפועל" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="submissionDate"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <DatePicker format="DD-MM-YYYY" style={{ ...inputStyle, width: '100%' }} placeholder="תאריך הגשת תביעת מענק לידה" />
                </Form.Item>

                <Form.Item
                    name="branch"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '22px' }}
                >
                    <Select placeholder="בחר סניף" style={inputStyle} direction='rtl'>
                        <Option value="branch1">ירושלים</Option>
                        <Option value="branch2">רחובות</Option>
                        <Option value="branch2">תל אביב</Option>
                    </Select>
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>
                    <Button htmlType="submit" style={{ marginLeft: '16px', background: 'rgba(3, 104, 176, 1)', color: 'white' }}>
                        שמור
                    </Button>
                    <Button type="default">
                        בטל
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default AddMaternityGrant;
