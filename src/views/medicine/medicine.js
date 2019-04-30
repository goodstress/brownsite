import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col, Typography, Divider } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

class medicine extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 800 }}
                        cover={<img alt="example" src="http://www.asianmedicinezone.com/wp-content/uploads/2016/07/meditation-672x372.jpg" />}

                    >
                        <Typography>
                            <Title>
                                Medicine
                        </Title>
                        </Typography>


                        <Typography>
                            <ul>
                                <li>Daoism often focuses on prolonging life and harmony with nature. Greater emphasis with the five elements as healing, as the elements were combined with herbs to form medicine.
</li>
                                <li>According to some sources, peace with nature and with the self is still stressed in modern, Chinese medicine.
</li>
                                <li>For example, a disease may be believed to have a root cause in nature or disarray.
</li>
                                <li>In addition, even more emphasis is put on the doctor to be in self-harmony and understanding, so that they may better understand the disease.
</li>
                            </ul>


                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>


            </div>
        );
    }
}

export default medicine;