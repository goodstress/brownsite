import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col, Typography, Divider } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

class Art extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 600 }}
                        cover={<img alt="example" src="http://www.taoistiching.org/image/image284.jpg" />}

                    >
                        <Meta
                            title="Beneficent Rain by Zhang Yucai (died 1316) during the Yuan dynasty"

                        />
                        <Typography>
                            <ul>
                                <li> Art flourished during this time, because the elite could not participate in politics, they participated in Daoism.
</li>
                                <li> Often depict Daoist ideals, gods, and events or places described in religious texts.</li>
                                <li>“Dragon Pine” - Depicts qi, or life energy. Also references Yin and Yang.</li>


                            </ul>


                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
            </div>
        );
    }
}

export default Art;