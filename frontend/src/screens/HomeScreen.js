import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = ({ location, history }) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  return (
    <Row>
      <Col>
        {userInfo ? 
          <div className="text-center my-3">
            <h2>Welcome {userInfo.name}, to the React Express Auth application</h2>  
          </div>
        :
        <p className="my-3 text-center">You are not logged in yet</p>
        } 
      </Col>
    </Row>
  )
}

export default HomeScreen
