import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {

    const api_url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const initialData = {
        title: '',
        director: '',
        abstract: '',
        image: ''

    }
    const [formData, setFormData] = useState(initialData);
    const initialThumb = '/images/no-image.jpg';
    const [thumb, setThumb] = useState(initialThumb);

    const handleSetValue = (e) => {
        //console.log(e.target.files[0])
        const { value, name, files } = e.target;
        if (name === 'image' && files && files.length > 0) {
            setThumb(URL.createObjectURL(e.target.files[0]))
            setFormData(prev => ({ ...prev, image: files[0] }))
        } else {

            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const dataToSend = new FormData();
        for (let key in formData) {
            console.log(key, formData[key]);
            dataToSend.append(key, formData[key]);
        }
        console.log(dataToSend);

        axios
            .post(api_url, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(() => navigate('/'))
            .catch((err) => console.log(err))


    }

    return (
        <div className="card">
            <header className="card-header">
                <h1>Aggiungi un libro</h1>
            </header>

            <section className="card-body">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            name="title"
                            className="form-control my-3"
                            placeholder="Inserisci il titolo"
                            type="text"
                            value={formData.title}
                            onChange={handleSetValue}
                        />
                    </div>
                    <div className="form-group">
                        <label>Regista</label>
                        <input
                            name="director"
                            className="form-control my-3"
                            placeholder="Inserisci il regista"
                            type="text"
                            value={formData.director}
                            onChange={handleSetValue}
                        />
                    </div>
                    <div className="form-group">
                        <label>Immagine</label>
                        <input
                            name="image"
                            className="form-control my-3"
                            type="file"
                            onChange={handleSetValue}
                        />
                        <img className="thumb" src={thumb} />
                    </div>
                    <div className="form-group">
                        <label>Abstract</label>
                        <textarea
                            name="abstract"
                            className="form-control my-3"
                            placeholder="Inserisci l'abstract"
                            value={formData.abstract}
                            onChange={handleSetValue}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary">Conferma</button>

                </form>
            </section>
        </div>
    )
}

export default CreateMovie