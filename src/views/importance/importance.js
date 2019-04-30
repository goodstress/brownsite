import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col, Typography, Divider } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

class politics extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}><Card
                        style={{ width: 600 }}
                        cover={<img alt="example" src="https://www.ancient.eu/img/r/p/500x600/4551.jpg?v=1485681719" />}

                    >
                        <Meta
                            title="Why Daoism is important to all people and societies, not just in China

                            "

                        />
                        <Typography>
                        There are lessons from Daoism that can be applied in every single country’s government and ideals, such as the emphasis on preserving nature, as well as focusing on the qualities of balance and virtue.  It also expresses the need for happiness and peace within a country, which should be a major focus for everybody.  

    
    
                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
            </div>
        );
    }
}

export default politics;