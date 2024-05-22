import { useState } from 'react';
import { Input, Button, Typography, Row, Col, message } from 'antd';
import bituhLeumiLogo from '../../../images/bituhLeumiLogo.svg';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'; // Import eye icons

const { Title } = Typography;

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'lital' && password === 'lital') {
            // Simulate successful login
            console.log('Login successful');
            // Redirect to /ClerkTasksDeshbord route upon successful login
            window.location.href = '/ClerkTasksDeshbord';
        } else {
            // Simulate login failure
            console.error('Login failed');
            // Display a popup message for login failure
            message.error('Login failed: Invalid username or password');
        }
    };

    return (
        <div style={{

            direction: 'rtl', padding: '24px', margin: '0 auto', borderRadius: '12px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
        }}>
            <img src={bituhLeumiLogo} alt="Bituh Leumi Logo" style={{ display: 'block', margin: '0 auto 35px' }} />
            <Title style={{ marginBottom: '20px' }} level={4}>מערכת גמלאות</Title>
            <Row justify="center" align="middle">
                <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                    <Input dir='rtl'
                        placeholder="שם משתמש"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ marginBottom: '20px' }}
                    />
                    <Input.Password
                        placeholder="סיסמה"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeOutlined style={{ marginRight: '8px' }} /> : <EyeInvisibleOutlined style={{ marginRight: '8px' }} />)} // Render eye icon on the left side
                        style={{ textAlign: 'right', direction: 'rtl', marginBottom: '20px' }} // Align input text to the right
                    />
                    <Button

                        onClick={handleLogin}
                        style={{ width: '100%', background: 'rgba(0, 84, 166, 1)', color: 'white', marginBottom: '20px' }}
                    >
                        התחברות
                    </Button>
                    <text style={{ color: 'rgba(0, 84, 166, 1)' }}>לפתרון בעיות התחברות נא ליצור קשר עם התמיכה הטכנית</text>
                    <Button

                        onClick={() => { window.location.href = '/AddMaternityGrant' }}
                        style={{ width: '100%', color: 'rgba(0, 84, 166, 1)', background: 'white', }}
                    >
                        הוספת אירוע לידה
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
