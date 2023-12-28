'use client'

import Container from 'react-bootstrap/Container';
import { Button, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import color1 from '@/styles/color1.module.css';
import color2 from '@/styles/color2.module.css';

function Home() {
  const TextStyle = {
    fontSize: '65px',
    margin: '40px 0 0 0'
  };
  const router = useRouter();
  const ClickButton1 = () => {
    router.push("/page1");
  };
  const ClickButton2 = () => {
    router.push("/page2");
  };

  return (
    <Container>
      <div style={TextStyle}>
        <div>WELCOME TO vnbaodev's PROFILE PAGE</div>
        <Row className="justify-content-center">
          <Col md="auto">
            <Button style={{ padding: '20px 110px', margin: '80px 80px 0 80px' }} variant='primary' onClick={() => ClickButton1()}>
              Click To See My Profile
            </Button>
          </Col>
          <Col md="auto">
            <Button style={{ padding: '20px 60px', margin: '80px 80px 0 80px' }} variant='primary' onClick={() => ClickButton2()}>
              Click To See My Programming Skill
            </Button>
          </Col>
        </Row>
      </div>
    </Container >
  );
}

export default Home;
