import React from 'react';
import './App.css';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
           <Avatar style={{float:'right'}} shape="square" size="large" icon={<UserOutlined />} src='./test.png' />
           <Title style={{color:'pink'}} level={5}>Tobias Zé Paulo</Title>
      </Header>
      <Layout>
        <Sider>
          <Menu
              defaultSelectedKeys={['dashboard']}
              mode="inline"
          >
            <Menu.Item>
               Dashboard
            </Menu.Item>
            <SubMenu
             key="sub1"
             title={
               <span>
                  <AppstoreOutlined />
                  <span>Store</span>
               </span>
             }
            >
              <Menu.ItemGroup key='Store' title='Store'>
                <Menu.Item key='Porto'> Porto </Menu.Item>
                <Menu.Item key='Lisbon'> Lisbon</Menu.Item>
                
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Content style={{ padding: '0 24px', minHeight: 500 }}>Content</Content>
      </Layout>
    </Content>
         <Footer style={{ textAlign: 'center' }}>Designed by JP. <b><br></br>The noob about React</b> </Footer>
        </Layout>
      </Layout>
     </Layout>
    </div>
  );
}

export default App;
