import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddWatch({ form, onFormChange, onAddWatch }) {
    return (
        <>
            <Form
                className="row row-cols-lg-auto gy-3 justify-content-center mt-4"
                onSubmit={onAddWatch}
            >
                <Form.Group className="col-12" controlId="name">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Например, Москва"
                        value={form.name}
                        onChange={onFormChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="col-12" controlId="timeZone">
                    <Form.Label>Временная зона</Form.Label>
                    <Form.Control
                        type="number"
                        name="timeZone"
                        placeholder="Например, 3"
                        value={form.timeZone}
                        onChange={onFormChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="col-12 align-self-end">
                    <Button variant="primary" type="submit">
                        Добавить
                    </Button>
                </Form.Group>
            </Form>
            <hr className="hr my-5"></hr>
        </>
    );
}

export default AddWatch;
