import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "./components/form/Form";




function App() {
 

  return (
    
     <Container fluid className="bg-danger">

      <Container>
        <Row>
        
            <Col  className="text-white ">
              <Stack gap={3} className="justify-content-center">
                <h1>Learn to code by watching others</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit modi dolorum odit
                  ratione odio nesciunt commodi, eum, nostrum eligendi impedit! Et dicta in laboriosam corrupti, est atque reprehenderit officiis.</p>
              </Stack> 
            </Col>
            
          

          <Col className="">
            <Button className="primary w-100 my-3">Try it free 7 days</Button>
            <Form />
              
            
          </Col>
        </Row>

      </Container>

     </Container>
    
  )
}

export default App
