import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #f8f8f8;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 1.8rem;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 2.5rem;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Imagen crypto" />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado