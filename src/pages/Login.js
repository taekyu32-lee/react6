import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store';

const Login = () => {

    const isLogin = useSelector((store) => store.isLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 16,
		},
	};
	const tailLayout = {
		wrapperCol: {
			offset: 8,
			span: 16,
		},
	};

    const [user,setUser] = useState({
        username:"",
        password:"",
    });

    const changeValue = (e) =>{
        setUser({
            ...user, [e.target.name]:e.target.value
        });
    }

    const submitLogin= (e) =>{
        e.preventDefault();
        fetch("http://192.168.35.15:8000/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(user)
        })
        .then((res)=>{
            //console.log(100,res.headers)
            // for(let header of res.headers.entries()){
            //     if(header[0] === "Authorization"){
            //         localStorage.setItem("Authorization",header[1]);
            //         console.log(123,header[1]);
            //     }else{
            //         console.log(222,"res 없음");
            //     }
            // }
            console.log(1,res.headers)
            return res.text();
        })
        .then(res=>{
            if(res.res==="fail"){
                alert("다시입력해주세요");
            }else{
                localStorage.setItem("user",user.username);
                localStorage.setItem("Authorization",res);
                alert("로그인 완료");
                dispatch(login());
                navigate("/");
            }
        });
    }



    return (
        <div>
            <Form
				{...layout}
				name="basic"
				initialValues={{
					remember: true,
				}}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input type="username" onChange={changeValue} value={user.username} name="username" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password type="password" onChange={changeValue} value={user.password} name="password" />
				</Form.Item>

				<Form.Item {...tailLayout} name="remember" valuePropName="checked" >
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit" onClick={submitLogin} >
						로그인
        </Button>
				</Form.Item>
			</Form>
        </div>
    );
};

export default Login;