import React from 'react';
import { Menu ,Space, Typography} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';


const { Title } = Typography;
const Header = () => {
    
    const isLogin = useSelector((store) => store.isLogin);
	const user = localStorage.getItem("user")
	const dispatch = useDispatch();
	const logoutbutton = () => {
		localStorage.removeItem("Authorization");
		localStorage.removeItem("user");
		dispatch(logout());
		console.log(isLogin);
	}
    return (
        <div>
            <Menu>

            {isLogin ?
					(
						<>
						
							<Menu.Item key="6"><Link to="joindog">강아지 등록</Link></Menu.Item>
							<Menu.Item key="7" onClick={logoutbutton}>로그아웃</Menu.Item>
							<Menu.Item key="1">{user}님 환영합니다!</Menu.Item>
						</>
					)
					:
					(
						<>
							<Menu.Item key="4"><Link to="login">로그인</Link></Menu.Item>
							<Menu.Item key="5"><Link to="join">회원가입</Link></Menu.Item>
							<Space align="center">
						<Title level={2} style={{align:"center"}}>h2. Ant Design</Title>
						</Space>
						</>
					)
				}
            </Menu>
        </div>
    );
};

export default Header;