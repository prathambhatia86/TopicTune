import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

function Exclusion({ changeExclusion }) {
	const [userInput, setUserInput] = useState('');
	const [list, setList] = useState([]);

	const updateInput = (value) => {
		setUserInput(value);
	};

	const addItem = () => {
		if (userInput.trim() !== '') {
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

	const submit = () => {
		changeExclusion(list);
	};

	return (
		<Container>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '2rem', // Reduced the font size for a sleeker design
					fontWeight: 'bold', // Corrected typo 'bolder' to 'bold'
					color: 'black',
					marginTop: '20px', // Added some margin at the top
				}}
			>
				EXCLUSION LIST
			</Row>

			<hr />
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Add prompts about news you don't want to see"
							size="lg"
							value={userInput}
							onChange={(e) => updateInput(e.target.value)}
							aria-label="add something"
							aria-describedby="basic-addon2"
						/>
						<InputGroup>
							<div className="d-flex justify-content-center flex-fill">
								<Button variant="dark" className="mt-2" onClick={addItem}>
									ADD
								</Button>
								<Button variant="dark" className="mt-2 ml-2" onClick={submit}>
									SUBMIT
								</Button>
							</div>
						</InputGroup>
					</InputGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<ListGroup>
						{list.map((item) => (
							<div key={item.id}>
								<ListGroup.Item
									className="rounded-2"
									style={{
										backgroundColor: 'rgb(210,210,255)', // Set the background color to cyan
										borderRadius: '10px', // Rounded corners
										marginBottom: '5px', // Add some margin between list items
										padding: '2px 2px'
									}}
									action
								>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										{item.value}
										<span>
											<Button
												className='btn'
												style={{ marginRight: '10px' }}
												variant="light"
												onClick={() => deleteItem(item.id)}
											>
												Delete
											</Button>
										</span>
									</div>
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
