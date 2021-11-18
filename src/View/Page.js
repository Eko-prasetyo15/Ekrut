import React, { useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postBasic } from "../Redux/Actions";
import Education from "../Component/Education"
import Experience from "../Component/Experience"
import Information from "../Component/Information"
import {
    Button,
    Card,
    Spinner
} from 'reactstrap';


const PageBox = () => {
    const dispatch = useDispatch()

    const user_id = useSelector((state) => state.ReduxData.datas)
    const isLoading = useSelector((state) => state.ReduxData.isLoading)

    const [basicValues, setBasicValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { fullname: "", phone: "", email: "" }
    );
    const [inputEduValues, setInputEduValues] = useState([
        { user_id: "", school: "", major: "", startdate: "", enddate: "" }
    ]);
    const [inputExpValues, setInputExpValues] = useState([
        { user_id: "", company: "", title: "", startdate: "", enddate: "" }
    ]);

    const handleInputBasic = (event) => {
        const { name, value } = event.target;
        setBasicValues({ [name]: value });
    };

    const handleInputEdu = (index, event) => {
        const values = [...inputEduValues];
        if (event.target.name === "school") {
            values[index].school = event.target.value;
        }
        if (event.target.name === "major") {
            values[index].major = event.target.value;
        }
        if (event.target.name === "startdate") {
            values[index].startdate = event.target.value;
        }
        if (event.target.name === "enddate") {
            values[index].enddate = event.target.value;
        }

        setInputEduValues(values);
    };

    const handleInputExp = (index, event) => {
        const values = [...inputExpValues];
        if (event.target.name === "company") {
            values[index].company = event.target.value;
        }
        if (event.target.name === "title") {
            values[index].title = event.target.value;
        }
        if (event.target.name === "startdate") {
            values[index].startdate = event.target.value;
        }
        if (event.target.name === "enddate") {
            values[index].enddate = event.target.value;
        }

        setInputExpValues(values);
    };

    const handleAddFields = () => {
        const values = [...inputEduValues];
        values.push({ user_id: user_id, school: "", major: "", startdate: "", enddate: "" });
        setInputEduValues(values);
    };

    const handleAddExpFields = () => {
        const values = [...inputExpValues];
        values.push({ user_id: user_id, company: "", title: "", startdate: "", enddate: "" });
        setInputExpValues(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputEduValues];
        if (index > 0) {
            values.splice(index, 1);
            setInputEduValues(values);
        }

    };
    const handleRemoveExpFields = index => {
        const values = [...inputExpValues];
        if (index > 0) {
            values.splice(index, 1);
            setInputExpValues(values);
        }

    };

    const onSave = () => {
        dispatch(postBasic(basicValues, inputEduValues, inputExpValues))
    }
    return (
        <>
            {isLoading && <Spinner/> }
                <Card className="card-outer">
                    <div className="container py-3">
                        <Information
                            inputField={basicValues}
                            handleInputField={handleInputBasic} />
                        <Education
                            inputValues={inputEduValues}
                            handleInputChange={handleInputEdu}
                            handleAddFields={handleAddFields}
                            handleRemoveFields={handleRemoveFields}
                        />
                        <Experience
                            inputExpValues={inputExpValues}
                            handleInputExp={handleInputExp}
                            handleAddExpFields={handleAddExpFields}
                            handleRemoveExpFields={handleRemoveExpFields} />
                        <Button style={{ backgroundColor: '#014376', width: '100%' }}
                            onClick={onSave}>
                            Save
                    </Button>
                    </div>
                </Card >
        </>
    )
}

export default PageBox