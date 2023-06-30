import { useState } from "react";
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Input from "../input/Input";

const Form = () => {
  const [formData, setFormData] = useState({

    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (newValue, id) => {
    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <BsForm onSubmit={onSubmit}>
      <Row>
        <Col>
          <Input value={formData.name} id="name" onChange={onChange} />
        

       
          <Input value={formData.lastname} id="lastname" onChange={onChange} />
        

        
          <Input type="email" value={formData.email} id="email" onChange={onChange} />
        

        
          <Input type="password" value={formData.password} id="password" onChange={onChange} />
        </Col>
      </Row>
      
      <Button type="submit" variant="danger">
        Login
      </Button>
    </BsForm>
  );
};

export default Form;
