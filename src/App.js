import Header from "./components/Header";
import './App.css';
import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content } from "antd/lib/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import {UserOutlined,LaptopOutlined,NotificationOutlined} from '@ant-design/icons';
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";


const MainListStyle = styled.div`
display : grid;
  grid-template-columns: auto auto auto;
`;

const  AppStyle = styled.div`
font-family: "62570체";
`;

function App() {
  return (
    <AppStyle>
    <Layout>
      <Header/>
      <Layout>
      <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key="1"  icon={<UserOutlined />}><Link to="/board1">게시판1</Link></Menu.Item>
              <Menu.Item key="2" icon={<LaptopOutlined />}><Link to="/board2">게시판2</Link></Menu.Item>
              <Menu.Item key="3" icon={<NotificationOutlined />} ><Link to="/board3">게시판3</Link></Menu.Item>
              <Menu.Item key="4" icon={<NotificationOutlined />} ><Link to="/map">지도</Link></Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Main/>
          </Content>
          
        </Layout>
      </Layout>
    </Layout>
              <Footer></Footer>
    </AppStyle>
  );
}

export default App;
