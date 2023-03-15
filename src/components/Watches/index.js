import { useState } from 'react';
import { nanoid } from 'nanoid';
import Container from 'react-bootstrap/Container';
import AddWatch from '../AddWatch';
import WatchesList from '../WatchesList';

const initialWatches = [
    {
        id: 1,
        timeZone: -4,
        watchName: 'Нью-Йорк',
    },
    {
        id: 2,
        timeZone: 3,
        watchName: 'Москва',
    },
    {
        id: 3,
        timeZone: 0,
        watchName: 'Лондон',
    },
];

function Watches() {
    const [form, setForm] = useState({ name: '', timeZone: '' });
    const [watches, setWatches] = useState(initialWatches);

    const handleFormChange = (evt) => {
        const { name, value } = evt.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddWatch = (evt) => {
        evt.preventDefault();

        setWatches([
            ...watches,
            { id: nanoid(), timeZone: +form.timeZone, watchName: form.name },
        ]);

        setForm({ name: '', timeZone: '' });
    };

    const handleRemoveWatch = (id) => {
        setWatches(watches.filter((item) => item.id !== id));
    };

    return (
        <Container>
            <AddWatch
                form={form}
                onFormChange={handleFormChange}
                onAddWatch={handleAddWatch}
            />
            <WatchesList watches={watches} onRemoveWatch={handleRemoveWatch} />
        </Container>
    );
}

export default Watches;
