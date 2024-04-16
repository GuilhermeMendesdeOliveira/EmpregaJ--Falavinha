import { Form } from "react-bootstrap";


function InputsForm({label, value, name, onChange, placeholder, obj}){
    return(
        <>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control type='text' value={value} name={name} onChange={onChange} placeholder={placeholder} required autoComplete='none' obj={obj} />
            </Form.Group>
        </>
    )
}

export default InputsForm;