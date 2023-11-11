import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #f8f8f8;
    display: block;
    font-size: 1.9rem;
    font-weight: 700;
    margin: 1rem 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 1.6rem;
    padding: 1.5rem;
    border-radius: 5rem;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('') 

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState( e.target.value )}
            >
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectMonedas ]
}

export default useSelectMonedas