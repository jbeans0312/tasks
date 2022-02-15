import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div style={{ border: "5px solid maroon", padding: "4px" }}>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://www.dndspeak.com/wp-content/uploads/2021/04/Bard-1.jpg"
                            alt="Bardius: the First Musician"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>♪Ruffneck Traveling Bard Service♫</h1>
                        <p>
                            Need some music to spice up your adventure? Need
                            some tunes to make the destination feel less far?{" "}
                            <span style={{ color: "navy" }}>
                                Ruffneck Travelling Bard Services
                            </span>
                            might be just for you!
                        </p>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "50px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>
                            Below are some of the heros we have played for in
                            the past, and their favorite songs!
                        </p>
                        <p>Hero Name</p>
                        <ol>
                            <li>Scurvius, the Orange Peel Pirate</li>
                            <li>Dairus, the Pillar of The North</li>
                            <li>Felinia, the Wardeness of Storm Wake </li>
                        </ol>
                        <p>Their Favorite Song</p>
                        <ol>
                            <li>Through the Isle and Waves</li>
                            <li>Boulder Path to Oblivion</li>
                            <li>Reaching into Stormfinity</li>
                        </ol>
                        <div
                            style={{
                                width: "50px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
