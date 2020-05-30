import React from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Luis Rodriguez',
            edad: 38,
            sueldo: 350000,
            direccion: "",
            soltero: true
        }

        //this.saludo = this.saludo.bind(this);
    }

    /* 
    state = {
        name: 'Luis Rodriguez'
    }
    */
    saludo = () => {
        console.log(this.state.name);
        this.setState({
            name: "Leslie",
            soltero: false
        })
        this.calcularEdad("2020-01-01");
    }


    calcularEdad(fecha) {
        let edad = 0;
        return edad;
    }

    cambiarNombre(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Componente de Clase</h1>
                <p>{this.props.name}</p>
                <p>{this.state.name}</p>
                <p>
                    <button onClick={this.saludo}>
                        Cambiar Nombre
                    </button>
                </p>
                <p><input name="name" placeholder="Ingrese Nombre" onBlur={
                    (evento) => {
                        this.cambiarNombre(evento);
                    }
                } /></p>
            </>
        )
    }
}

export default AppClass;