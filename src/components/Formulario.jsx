import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/Monedas'
import { useEffect, useState } from 'react'


const InputSubmit = styled.input`
    background-color: #428efe;
    border-radius: 5rem;
    border: none;
    width: 100%;
    padding: 1.6rem;
    margin-top: 3rem;
    color: #f9f8f8;
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: uppercase;
    transition: background-color .4s ease;
    &:hover {
        background-color: #0e6eff;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ cryptomoneda, SelectCryptomoneda] = useSelectMonedas('Elige tu Crypto', cryptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            console.log(resultado)

            const arrayCryptos = resultado.Data.map( crypto => {

                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto
            })
            setCryptos(arrayCryptos)
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if([moneda, cryptomoneda].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cryptomoneda
        })
    }

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCryptomoneda />

            <InputSubmit type="submit" value="Cotizar" />
        </form>
        </>
    )
}

export default Formulario