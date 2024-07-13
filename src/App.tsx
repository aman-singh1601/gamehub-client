import './App.css'
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { createrRoutes, privateRoutes } from "./routes"
import Layout from './components/layout'
import CreaterLayout from './components/createrLayout'

function App() {


  return (
    <React.Fragment>
      <Router>
        <Routes>
          {
            privateRoutes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={(
                  <Layout>
                    {route.Component}
                  </Layout>
                )}
              />
            ))
          }
        </Routes>
        <Routes>
          {
            createrRoutes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={(
                    <CreaterLayout>
                      {route.component}
                    </CreaterLayout>
                  )}
              />
            ))
          }
        </Routes>
      </Router>
    </React.Fragment>
  )
};

export default App
