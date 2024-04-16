import Form from 'react-bootstrap/Form';

function InputSelectForm({label, name, id, value, onChange, option1, option2, option3, option4, option5, optvalue, optvalue2, optvalue3, optvalue4}) {
    return (
        <>
            <Form.Group>
                <Form.Label>{label}</Form.Label><br/>
                <Form.Select name={name} id={id} value={value} onChange={onChange}>
                    <option>{option1}</option>
                    <option value={optvalue}>{option2}</option>
                    <option value={optvalue2}>{option3}</option>
                    <option value={optvalue3}>{option4}</option>
                    <option value={optvalue4}>{option5}</option>
                </Form.Select>
            </Form.Group>

        </>
    )
}

export default InputSelectForm;