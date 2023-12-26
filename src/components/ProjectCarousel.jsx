import { Carousel, Col, Container, Image } from "react-bootstrap";


export const ProjectCarousel = ({items = [
    {   
        name: 'project 1',
        description: 'description',
        imgSrc: undefined,
    }
]}) =>
{
    return (
        <Container>
            <Carousel>
                {items.map((val, index) => 
                (
                    <Carousel.Item key={val.name}>
                        <Image text="image" src={val.imgSrc} width={"100%"}></Image>
                        <Carousel.Caption>
                            <h3>{val.name}</h3>
                            <p>{val.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
                )}
            </Carousel>
        </Container>
    )
}