import React from "react";
import { Layout } from "antd";
import DownloadsContainer from "../containers/Downloads";
import SettingPanel from "../containers/SettingPanel";
import JobFormPanel from "../containers/JobFormPanel";
import { Route } from "react-router-dom";
const { Content } = Layout;

class Panel extends React.Component {
  render() {
    return (
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }}
      >
        <Route exact path="/" component={DownloadsContainer} />
        <Route path="/settings" component={SettingPanel} />
        <Route path="/job-form" component={JobFormPanel} />
      </Content>
    );
  }
}

export default Panel;
