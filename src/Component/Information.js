import React from "react"
import {
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
} from 'reactstrap';

const Information = (props) => {

    return (
        <>
            <Card className="mb-3">
                <Col xs="12" sm="12">
                    <CardHeader>
                        <h5><strong>BASIC INFORMATION</strong></h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <Form>
                                    <Col sm={12} className="mb-3">
                                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                            <Label className="me-sm-2" for="company">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="fullname"
                                                name="fullname"
                                                placeholder="Enter Your Fullname"
                                                type="text"
                                                onChange={props.handleInputField}
                                                value={props.inputField.fullname}/>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={12} className="mb-3">
                                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                            <Label className="me-sm-2" for="phone">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                placeholder="Enter Your Phone Number"
                                                type="number"
                                                onChange={props.handleInputField}
                                                value={props.inputField.phone}/>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={12} className="mb-3">
                                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                            <Label className="me-sm-2" for="email">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="Enter Your Email"
                                                type="text"
                                                onChange={props.handleInputField}
                                                value={props.inputField.email}/>
                                        </FormGroup>
                                    </Col>
                                </Form>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Card>
        </>
    )
}
export default Information