import React from "react"
import { 
    Button,
     Card, 
     CardHeader, 
     CardBody, 
     Row, 
     Col, 
     FormGroup, 
     Label, 
     Input } from "reactstrap";

const Education = (props) => {

    const ListForm = 
        props.inputValues.map((inputField, index) => {
            return (
                <Card key={`${inputField}~${index}`} className="mb-2">
                    <CardBody>
                        <Row>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="school">
                                        Scholl
                                    </Label>
                                    <Input
                                        id="school"
                                        name="school"
                                        placeholder="Enter School"
                                        type="text"
                                        onChange={event => props.handleInputChange(index, event)}
                                        value={props.inputValues.school}/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="major">
                                        Major
                                    </Label>
                                    <Input
                                        id="major"
                                        name="major"
                                        placeholder="Enter Major"
                                        type="text"
                                        onChange={event => props.handleInputChange(index, event)}
                                        value={props.inputValues.major}/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="stardate">
                                        Start Date
                                    </Label>
                                    <Input
                                        id="startdate"
                                        name="startdate"
                                        type="date"
                                        onChange={event => props.handleInputChange(index, event)}
                                        value={props.inputValues.startdate}/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="enddate">
                                        End Date
                                    </Label>
                                    <Input
                                        id="enddate"
                                        name="enddate"
                                        type="date"
                                        onChange={event => props.handleInputChange(index, event)}
                                        value={props.inputValues.enddate}/>
                                </FormGroup>
                            </Col>
                            {index > 0 ? (
                                <div style={{textAlign:'right'}}>
                                    <Button color="danger" onClick={() => props.handleRemoveFields(index)}>
                                        Delete
                                    </Button>
                                </div>
                            ) : null}
                        </Row>
                    </CardBody>
                </Card>
            )
        })
    return (
        <>
            <Card className="mb-3">
                <Col xs="12" sm="12">
                    <CardHeader>
                        <h5><strong>EDUCATION</strong></h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {ListForm}
                        </Row>
                        <Button style={{ backgroundColor: '#014376'}} onClick={props.handleAddFields}>
                            Add New
                        </Button>
                    </CardBody>
                </Col>
            </Card>
        </>
    )
}
export default Education