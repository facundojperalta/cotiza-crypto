import styled from '@emotion/styled'
import ImagenCrypto from './assets/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`
const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`

const Heading = styled.h1 `
    color: #f9f8f8;
    text-align: center;
    font-weight: 700;
    font-size: 3.8rem;
    margin: 80px 0 50px 0;

`

function App() {

    const [ monedas, setMonedas ] = useState({})
    const [ resultado, setResultado ] = useState({})
    const [ cargando, setCargando ] = useState(false)

    useEffect(() => {
        if(Object.keys(monedas).length > 0) {

            const cotizarCrypto = async () => {
                setCargando(true)

                const { moneda, cryptomoneda } = monedas
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
                
                const respuesta = await fetch(url)
                const resultado= await respuesta.json()

                setResultado(resultado.DISPLAY[cryptomoneda][moneda])

                setCargando(false)
            }
            cotizarCrypto()
        }
    }, [monedas])

    return (
        <>  
            <Contenedor>

                <Imagen 
                    src={ImagenCrypto}
                    alt="Imagenes criptomonedas"
                />

                <div>
                <Heading>Cotiza crypto</Heading>
                <Formulario
                        setMonedas={setMonedas}
                />
                {cargando && <Spinner />}
                {resultado.PRICE && <Resultado resultado={resultado} />}
                </div>

            </Contenedor>
        </>
    )
}

export default App
