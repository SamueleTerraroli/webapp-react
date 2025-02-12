import { useState } from "react"

const CreateMovie = () => {

    const initialData = {
        title: '',
        director: '',
        abstract: '',
        image: null

    }
    const [formData, setFormData] = useState(initialData);

    const handleSetValue = (e) => {
        console.log(e.target)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="card">
            <header className="card-header">
                <h1>Aggiungi un libro</h1>
            </header>

            <section className="card-body">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>name</label>
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
                        <label>Director</label>
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
                            value={formData.image}
                            onChange={handleSetValue}
                        />
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