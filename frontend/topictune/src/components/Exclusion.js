import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

function Exclusion({changeExclusion}) {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== '') {
      const newUserInput = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list, newUserInput]);
      setUserInput('');
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };
  const submit=()=>{
    changeExclusion(list);
  }
  return (
    <Container>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '3rem',
          fontWeight: 'bolder',
          color: 'black',
        }}
      >
        EXCLUSION LIST
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add prompts about news you don't want to see"
              size="lg"
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup>
              <Button variant="dark" className="mt-2" onClick={addItem}>
                ADD
              </Button>
              <Button variant="dark" className="mt-2" onClick={submit}>
                SUBMIT
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  variant="dark"
                  action
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.value}
                  <span>
                    <Button
                      style={{ marginRight: '10px' }}
                      variant="light"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Exclusion;
