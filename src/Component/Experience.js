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

const Experience = (props) => {

    const ListForm =
        props.inputExpValues.map((inputField, index) => {
            return (
                <Card key={`${inputField}~${index}`} className="mb-2">
                    <CardBody>

                        <Row>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="company">
                                        Company
                                    </Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        placeholder="Enter Company"
                                        type="text"
                                        onChange={event => props.handleInputExp(index, event)}
                                        value={props.inputExpValues.company}/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label className="me-sm-2" for="title">
                                        Title
                                    </Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="Enter Title"
                                        type="text"
                                        onChange={event => props.handleInputExp(index, event)}
                                        value={props.inputExpValues.title}/>
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
                                        onChange={event => props.handleInputExp(index, event)}
                                        value={props.inputExpValues.startdate}/>
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
                                        onChange={event => props.handleInputExp(index, event)}
                                        value={props.inputExpValues.enddate}/>
                                </FormGroup>
                            </Col>
                            {index > 0 ? (
                                <div style={{ textAlign: 'right' }}>
                                    <Button color="danger" onClick={() => props.handleRemoveExpFields(index)}>
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
                        <h5><strong>EXPERIENCE</strong></h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {ListForm}
                        </Row>
                        <Button style={{ backgroundColor: '#014376' }} onClick={props.handleAddExpFields}>
                            Add New
                        </Button>
                    </CardBody>
                </Col>
            </Card>
        </>
    )
}
export default Experience