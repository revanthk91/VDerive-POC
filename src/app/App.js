import React, { Component } from 'react'
import './App.css'
import { Route, withRouter, Switch } from 'react-router-dom'
import 'react-image-gallery/styles/css/image-gallery.css'
import Test from '../poll/Test'
import AppHeader from '../common/AppHeader'
import NotFound from '../common/NotFound'
import LoadingIndicator from '../common/LoadingIndicator'

import { Layout, notification } from 'antd'
const { Content } = Layout

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
    }

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    })
  }

  componentDidMount() {}

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Layout className="app-container">
        <AppHeader currentUser="test" />

        <Content className="app-content">
          <React.Fragment className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Test currentUser="test" />}
              ></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </React.Fragment>
        </Content>
      </Layout>
    )
  }
}

export default withRouter(App)
