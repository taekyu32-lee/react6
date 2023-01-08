import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		password: '${label} is not validate password!',
		email: '${label} is not validate email!'
	},
};

const Join = () => {

    const navigate= useNavigate();

    const [user,setUser] = useState({
        username:"",
        password:"",
        place:"",
        email:"",
    });

    function inputHandle(e){
        setUser({...user, [e.target.name]:e.target.value});
        console.log(user);
    }

    const onFinish = (values) =>{
        console.log(values);
    }

    function join(e){
        e.preventDefault();

        fetch("http://localhost:8000/joinProc",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8",
            },
            body: JSON.stringify(user),
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(111,res);
            if(res==="ok"){
                alert("가입성공");
                navigate('/');
            }else{
                alert("가입실패");
            }
        });
    }
    return (
        <div>
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
            <Form.Item
                name="username"
                label="이름"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input type="text"
                    name="username"
                    onChange={inputHandle}
                    value={user.username} placeholder="이름 입력" />
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                label="비밀번호"

            >
                <Input type="password"
                    name="password"
                    onChange={inputHandle}
                    value={user.password} placeholder="비밀번호 입력" />
            </Form.Item>

            <Form.Item
                name={['user', 'place']}
                label="지역"
            >
                <Input type="text"
                    name="place"
                    onChange={inputHandle}
                    value={user.place} placeholder="지역 입력" />
            </Form.Item>


            <Form.Item
                name={['user', 'email']}
                label="이메일"
            >
                <Input type="text"
                    name="email"
                    onChange={inputHandle}
                    value={user.email}
                    placeholder="메일 입력" />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" onClick={join}>
                    가입하기
            </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Join;