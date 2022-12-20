function Formulario(){
    return(
        <form className="row mt-4" method="POST">
            <div className="col-md-6">
                <div>
                    <label className="form-label">Nombre</label>
                    <input className="form-control" type='text' pattern="[a-zA-Z]+" minLength='4' required></input>
                </div>
                <div>
                    <label className="form-label">Email</label>
                    <input className="form-control" type='email' required></input>
                </div>
                <div>
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control" rows='4' cols='50'></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mt-3" type="submit">Envíar</button>
                </div>
            </div>
           
        </form>
    );
}

export default Formulario;