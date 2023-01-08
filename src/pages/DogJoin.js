import { Button, Input ,Form} from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const DogJoin = () => {

    const username = useSelector((Join) => Join.username);
    const navigate = useNavigate();

    const [dog, setDog] = useState({
        name:"",
        catagory:"",
        age:"",
        sex:"",
        image:"",
    });

    function inputHandle(e){
        setDog({...dog,[e.target.name]:e.target.value});
        console.log(dog);
    }

    const onFinish = (values)=>{
        console.log(values);
    }

    function dogJoin(e){
        e.preventDefault();

        fetch("http://localhost:8000/dogJoinProc",{
            method:"POST",
            headers: {
                "Content-Type":"application/json; charset=utf-8",
                "Authorization": localStorage.getItem("Authorization")
            },
            body: JSON.stringify(dog),
        })
        .then((res)=>res.text())
        .then((res)=>{
            if(res==="ok"){
                alert("가입성공");
                navigate("/");
            }else{
                alert("가입실패");
            }
        });
    }
    return (
        <div>
            <Form {...layout} name="nest-messages" onFinish={onFinish} >
				<Form.Item
					name="name"
					label="강아지이름"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input type="text"
						name="name"
						onChange={inputHandle}
						value={dog.name} placeholder="강아지이름 입력" />
				</Form.Item>
				<Form.Item
					name="age"
					label="나이"

				>
					<Input type="number"
						name="age"
						onChange={inputHandle}
						value={dog.age} placeholder="나이 입력" />
				</Form.Item>

				<Form.Item
					name="catagory"
					label="강아지 종류"
				>
					<Input type="text"
						name="catagory"
						onChange={inputHandle}
						value={dog.catagory} placeholder="강아지 종류 입력" />
				</Form.Item>


				<Form.Item
					name="sex"
					label=" 성별"
				>
					<Input type="text"
						name="sex"
						onChange={inputHandle}
						value={dog.sex}
						placeholder="성별 입력" />
				</Form.Item>

				<Form.Item
					name="image"
					label="사진"
				>
					<Input type="text"
						name="image"
						onChange={inputHandle}
						value={dog.image}
						placeholder="사진 입력" />
				</Form.Item>

				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit" onClick={dogJoin}>
						등록하기
        </Button>
				</Form.Item>
			</Form>
        </div>
    );
};

export default DogJoin;