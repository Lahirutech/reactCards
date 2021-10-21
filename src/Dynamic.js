import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Dynamic() {
  //https://nba-players.herokuapp.com/players-stats

  const [playerData, setPlayerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://nba-players.herokuapp.com/players-stats')
      const nbaData = await response.json()
      setPlayerData(nbaData.slice(0, 15))
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Row>
        {playerData.map((playerData, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card >
              <Card.Img src="https://via.placeholder.com/150x75" />

              <Card.Body>
                <Card.Title>{playerData.name}</Card.Title>
                <Card.Text>{playerData.team_name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}