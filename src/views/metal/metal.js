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
                        cover={<img alt="example" src="https://ancientcivilizationsjjkkd.weebly.com/uploads/1/2/4/4/12443605/8776668_orig.jpg" />}

                    >
                        <Meta
                            title="Influences on Metallurgy in China"
                            description="Daoists attempted to turn metals from China into more valuable metals, like gold.  They believed in the art of alchemy, fusing together metals and chemicals to create ideal materials for self-sufficiency.  They also tried to incorporate materials they had never used before, like mercury.  
                            "

                        />
                       

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
            </div>
        );
    }
}

export default Art;