import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col, Typography, Divider } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

class architecture extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 600 }}
                        cover={<img alt="example" src="https://www.discoversichuan.com/d/file/sichuan-guide/sichuan-attractions/5ed4561e2c2e7966528ad35d1e4ded82.jpg" />}

                    >
                        <Meta
                            title="Influences on Architecture in China"
                        />

                        <Typography>

                            <li> The construction style follows the Taoist theory of the five elements and eight diagrams.</li>
                            <ul>
                                <li>Early Taoist architecture was very traditional.</li>
                                <li>During the Jin Dynasty Toaism was accepted by most rulers.  This led to the building of temples throughout the dynasty period. </li>
                            </ul>
                            <li> Traditional style</li>
                            <ul>
                                <li>Symmetric</li>
                                <li>Halls of the buildings were set up along a central axis.</li>
                            </ul>
                            <li>Bagua Style</li>
                            <ul>
                                <li>All structures surround Danlu (A stove used to make the pills of immmortality)</li>
                                <li>This style of architecture reflects the Taoist nature of believing that the human cosmos follows the natural cosmos to integrate energy, qi, and spirit.</li>
                            </ul>

                        </Typography>


                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
            </div>
        );
    }
}

export default architecture;