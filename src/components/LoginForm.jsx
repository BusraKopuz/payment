import React from 'react'
import { Button, Form, Input } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import '../components/LoginForm.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/loginSlice';
import { Spin } from 'antd';



function LoginForm() {
    const dispatch = useDispatch();
    const {loading} = useSelector((store) => store.user);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const user = {
            "fullName": values.username,
            "email": values.email
        }
        dispatch(fetchUser(user))
            .then(response => {
                if (response.type === "fetchUser/fulfilled") {
                    navigate("/package-list");
                }        
            })
    };
  return (
    <div className='login-container'>
        <Form
           name="basic"
           className='login-form'
           initialValues={{ remember: true }}
           onFinish={onFinish}
           autoComplete="off"
        //    onFieldsChange={onFieldsChange}
        >
            <label>Adınız Soyadınız</label>
                <Form.Item
                    name="username"
                    type="username"
                    rules={[{
                        required: true,
                        message: 'Please input your username!',
                    }]}
                >
                    <Input size='large' placeholder="Adınız Soyadınız" prefix={<UserOutlined />} />
                </Form.Item>

            <label>Email Adresiniz</label>
                <Form.Item
                    name="email"
                    type="email"
                    rules={[{
                        type: "email",
                        required: true,
                        message: "The input is not valid E-mail!",
                    }]}
                >
                    <Input size='large' placeholder="Email Adresiniz" prefix={<MailOutlined />} />
                </Form.Item>

                <Form.Item className='login-button'>
                    <Button size='large' type="primary" htmlType='submit'
                    >
                        {loading ? <Spin /> : 'Devam Et'}
                    </Button>
                </Form.Item>
        </Form>
    </div>
  )
}

export default LoginForm