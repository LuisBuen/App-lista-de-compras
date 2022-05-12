import logo from './logo.svg'
import './App.css'

import { Button, Menu } from 'antd'
import Routes from './services/routes'
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <div className="main">
      <Layout className="main_content">
        <Header className="header">Header</Header>
        <Layout>
          <Sider className="menu">
            <Menu className="menu_section">
              <Menu.Item key={1} icon={<PlusOutlined />}>
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />}>
                Listar Produto
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer className="footer">Todos os direitos reservados</Footer>
      </Layout>
    </div>
  )
}

export default App
