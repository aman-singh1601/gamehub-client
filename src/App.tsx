import './App.css'
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { privateRoutes } from "./routes"
import Layout from './components/layout'

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
                  element = {(
                      <Layout>
                        {route.Component}
                      </Layout>
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
