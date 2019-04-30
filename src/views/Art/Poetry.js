import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col, Typography, Divider } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

class Poetry extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 514 }}
                        cover={<img alt="example" src="https://www.tah-heetch.com/wp-content/uploads/2018/3/poet-seers-daoist-poets.jpg" />}

                    >

                        <Typography>
                            <ul>
                                <li> As opposed to deities, daoist poetry focuses on ideals, including qi, the Supreme Being, etc.
</li>
                                <li>Lao Tzu, a sixth century poet, wrote about inner peace based in daoism.
</li>

                            </ul>


                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>

                <Row>

                    <Col span={6}></Col>

                    <Typography>
                        <Paragraph>

                            “At the center of your being
    you have the answer;
    you know who you are
    and you know what you want.”

                        </Paragraph>
                    </Typography>

                    <Col span={6}></Col>
                </Row>
            </div>
        );
    }
}

export default Poetry;