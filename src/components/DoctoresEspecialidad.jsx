import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DoctoresEspecialidad extends Component {

    especialidad = null;

    state = {
        especialidades: [],
        doctores: []
    }

    selectValue = React.createRef();

    loadEspecialidades = () => {
        let req = "/api/Doctores/Especialidades";
        axios.get(Global.apiUrl + req).then(r => {
            this.setState({
                especialidades: r.data
            })
        });
    }

    componentDidMount = () => {
        this.loadEspecialidades();
    }

    loadDoctores = (event) => {
        event.preventDefault();
        let esp = this.selectValue.current.value;
        this.especialidad = esp;
        let req = `/api/Doctores/DoctoresEspecialidad/${esp}`;
        console.log(Global.apiUrl + req)
        axios.get(Global.apiUrl + req).then(r => {
            this.setState({
                doctores: r.data
            })
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.especialidades && 
                    <form>
                        <label>Elige una especialidad: </label>
                        <select ref={this.selectValue}>
                        {
                            this.state.especialidades.map((e, i) => {
                                return (
                                    <option key={i} value={e}>
                                        {e}
                                    </option>
                                )
                            })
                        }
                        </select>
                        <br />
                        <button onClick={this.loadDoctores} type="submit">Mostrar detalles</button>
                    </form>
                }

                <br/> <br/>
                {
                    this.state.doctores.length > 0 &&
                    <div>
                        <p>La especialidad seleccionada es: {this.especialidad}</p>
                        <p>Doctores:</p>
                        {
                            this.state.doctores.map((d, i) => {
                                return (
                                    <div key={i}>
                                        <ul>
                                            <li>Id Doctor: {d.idDoctor}</li>
                                            <li>Apellido: {d.apellido}</li>
                                            <li>Especialidad: {d.especialidad}</li>
                                            <li>Salario: {d.salario}</li>
                                            <li>Hospital: {d.idHospital}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
