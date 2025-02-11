import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ReviewForm = ({ movie_id, fetchData }) => {

    const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`;
    const redirect = useNavigate();

    const intialFormData = {
        text: '',
        name: '',
        vote: ''
    }
    const [formData, setFormData] = useState(intialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {

        if (!formData.name || !formData.text) return false
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(api_url);

        if (!validateForm()) {
            setErrorMessage('Attenzione, i campi devono essere compilati correttamente')
            return true
        }


        axios.post(api_url, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res.data);
                setFormData(intialFormData)
                setErrorMessage('');
                fetchData(movie_id, () => redirect('/404'))

            })
            .catch(err => {
                console.log(err);

            })
    }

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        setFormData((prev => ({ ...prev, [name]: value })));

    }

    return (
        <div className="card my-3">
            <header className="card-header">
                <h1>Dicci il tuo parere sul film!</h1>
            </header>
            <div className="card-body">
                <p className="text-danger">{errorMessage}</p>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            name="name"
                            className="form-control"
                            placeholder="Inserisci il nome"
                            type="text"
                            value={formData.name}
                            onChange={setFieldValue}
                        />
                        <label>Text</label>
                        <textarea
                            name="text"
                            className="form-control my-3"
                            placeholder="Iserisci testo"
                            type="text"
                            value={formData.text}
                            onChange={setFieldValue}
                        ></textarea>
                        <label>Vote</label>
                        <input
                            name="vote"
                            className="form-control my-3"
                            type="number"
                            min={1}
                            max={5}
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit">Invia</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ReviewForm