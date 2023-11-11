import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #b7322c;
    color: #f8f8f8;
    padding: 1.5rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error