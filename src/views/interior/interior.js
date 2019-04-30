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
                        style={{ width: 800 }}
                        cover={<img alt="example" src="http://taipingdaoism.com/images/5151.jpg" />}

                    >
                    <Typography>
                        <Paragraph>
                            Feng Shui
                        </Paragraph>
                    </Typography>
                    <Meta title="The five elements: 
                    
"/>

                        <Typography>
                            <ul>
                                <li>Fire: living room; bright and colorful</li>
                                <li>Earth: dining room; round or oval tables with soft earth colors
</li>
                                <li>Metal: bedroom; light colors, clean, orderly
</li>
                                <li>Water: bathroom; quiet, blue, cool
</li>
                                <li>Wood: kitchen; grow herbs, use the color green
</li>
                            </ul>


                        </Typography>

                    </Card></Col>
                    <Col span={6}></Col>




                </Row>
                <Divider />
                <Row>
                
                    <Col span={6}/>
                    <Col span={12}>
<Card> 

    <Typography>
            <ul>
                <li>Can be created by feeling the energy of a room and correcting it if you feel uneasy.
</li>
<li>Goal: allow each room to flow into the other and provide peace in each room.
</li>
<li>Ultimately, it allows the energy of the universe to control you, providing peace.
</li>
            </ul>
    </Typography>
</Card>
</Col>

                <Col span={6}></Col> 
                </Row>


            </div>
        );
    }
}

export default Poetry;