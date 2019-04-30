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
                        cover={<img alt="example" src="https://personaltao.com/wp-content/uploads/2014/10/personal_power.jpg" />}

                    >
                        <Meta
                            title="Influences of Politics in China
                            "

                        />
                        <Typography>
                            Daoism is officially required to aid in the country’s decisions regarding political parties, like communism.  The leaders of the country were also valued due to a set of qualities known as the Daoist models of kingship.  Dao texts were also studied and applied to various decisions involving the politics of the Chinese government.
    
    
    
                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
            </div>
        );
    }
}

export default politics;