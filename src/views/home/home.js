import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';
import "./index.css"
const { Meta } = Card;
class home extends Component {
    render() {
        return (
            <div id="card1">
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 300 }}
                        cover={<img alt="example" src="http://www.humanreligions.info/yy.gif" />}

                    >
                        <Meta
                            title="The Influence of Taoism"
                            description="The Taoist Religion has influenced man throughout millenia."
                        />
                    </Card></Col>
                    <Col span={6}></Col>




                </Row>

            </div >
        );
    }
}

export default home;