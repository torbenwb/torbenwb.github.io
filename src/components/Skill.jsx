import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export const Skill = ({title, level, imgSrc }) =>
{
    const [showMore, setShowMore] = useState(false);

    return (
        <Col sm={12} md={6}>
            <Row>
                <Col xs={4} md={12} lg={12}>
                    <Container>
                        {title}
                    </Container>
                    
                </Col>
                <Col xs={8}>
                    <ProgressBar now={level * 10}/>
                </Col>
            </Row>
            {
                showMore && (
                    <Container>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur harum nobis placeat, distinctio deleniti, reprehenderit fugiat perferendis adipisci suscipit quas. Nam, quam necessitatibus velit dolore sit temporibus repudiandae sunt.
                    </Container>
                )
            }
        </Col>
        
    )
}