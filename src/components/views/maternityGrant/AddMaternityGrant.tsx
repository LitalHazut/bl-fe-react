import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Typography } from 'antd';
import moment from 'moment';  // Ensure moment is imported
import bituhLeumiLogo from '../../../images/bituhLeumiLogo.svg';
import { requestToBackend } from '../../../service/requestToBackend';
import locale from 'antd/es/date-picker/locale/he_IL';
import { getFromServer } from '../../../utils/network';

const { Option } = Select;
const { Title } = Typography;

interface FormValues {
    id: string;
    oid: string;
    firstName: string;
    lastName: string;
    birthDate: moment.Moment;
    submissionDate: moment.Moment;
    branch: string;
    upload?: any;
}

interface Branch {
    id: string;
    name: string;
}

export const AddMaternityGrant: React.FC = () => {
    const [form] = Form.useForm<FormValues>();
    const [branches, setBranches] = useState<Branch[]>([]);

    const onFinish = async (values: FormValues) => {
        try {
            const response = await requestToBackend('add-maternity-grant', 'post', {
                ID: values.id,
                OID: values.oid,
                firstName: values.firstName,
                lastName: values.lastName,
                birthDate: values.birthDate,
                submissionDate: values.submissionDate,
                branch: values.branch
            });

            if (response.status === 200) {
                console.log('Maternity grant added successfully:', response.data);
                // Handle successful response
            } else {
                console.error('Failed to add maternity grant:', response.statusText);
                // Handle error response
            }
        } catch (error) {
            console.error('An error occurred while processing the request:', error);
            // Handle error response
        }
    };
    const getBranches = async (): Promise<boolean> => {
        try {
            const response = await getFromServer('get-branches');
            setBranches(response.data);
        }
        catch (err) {
            console.error('Error fetching branches:', err);
        }
        return false;
    };

    useEffect(() => {
        getBranches();
        // const fetchBranches = async () => {
        //     try {
        //         const response = await getFromServer('get-branches');
        //         setBranches(response.data);
        //     } catch (error) {
        //         console.error('Error fetching branches:', error);
        //     }
        // };

        // fetchBranches();
    }, []);

    const inputStyle = {
        width: '350px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={{
            padding: '24px', margin: '0 ', borderRadius: '12px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}>
            <img src={bituhLeumiLogo} alt="Bituh Leumi Logo" style={{ display: 'block', margin: '0 auto 24px' }} />
            <Title level={4} style={{ textAlign: 'right', }}>הוספת אירוע חדש</Title>
            <Title level={5} style={{ textAlign: 'right', marginBottom: '18px' }}>פרטי אירוע הלידה</Title>
            <Form
                form={form}
                name="birth_event_form"
                onFinish={onFinish}
                layout="vertical"
                style={{ gap: '12px' }}
            >
                <Form.Item
                    name="id"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input placeholder="תז מבוטחת (ID)" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="oid"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input placeholder="OID מבוטחת" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input placeholder="שם פרטי" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <Input placeholder="שם משפחה" style={inputStyle} />
                </Form.Item>

                <Form.Item
                    name="birthDate"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <DatePicker locale={locale} format="DD-MM-YYYY" style={{ ...inputStyle, width: '100%' }} placeholder="תאריך לידה בפועל" />
                </Form.Item>

                <Form.Item
                    name="submissionDate"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '16px' }}
                >
                    <DatePicker locale={locale} format="DD-MM-YYYY" style={{ ...inputStyle, width: '100%' }} placeholder="תאריך הגשת תביעת מענק לידה" />
                </Form.Item>

                <Form.Item
                    name="branch"
                    rules={[{ required: true, message: 'שדה זה שדה חובה.' }]}
                    style={{ marginBottom: '22px' }}
                >
                    <Select placeholder="בחר סניף" style={{ width: '100%' }}>
                        {branches.map((branch) => (
                            <Option key={branch.id} value={branch.id}>
                                {branch.name}
                            </Option>
                        ))}
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
        </div>
    );
};

export default AddMaternityGrant;
