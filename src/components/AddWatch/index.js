import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddWatch() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formWatchName">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" placeholder="Например, Москва" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTimeZone">
                <Form.Label>Временная зона</Form.Label>
                <Form.Control type="number" placeholder="Например, +3" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Добавить
            </Button>
        </Form>
    );
}

export default AddWatch;
