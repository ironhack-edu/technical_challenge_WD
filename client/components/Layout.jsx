import { Layout as AntLayout, Menu, theme } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntLayout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={({ key }) => {
            if (key === "phones-link") {
              navigate("/phones");
            }
          }}
          items={[
            {
              key: "phones-link",
              icon: <PhoneOutlined />,
              label: "Phones",
            },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Tech challenge ©2023 Created by Cristina Ramos
      </Footer>
    </AntLayout>
  );
};

export default Layout;
