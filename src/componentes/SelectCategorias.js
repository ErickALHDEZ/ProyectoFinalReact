import React, {useState} from 'react';
import styled from 'styled-components';
import theme from './../theme';
import IconoCategoria from './../elementos/IconoCategoria';
import {ReactComponent as IconoDown} from './../imagenes/down.svg';

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem;
    position: relative;
    height: 5rem;
    width: 40%;
    padding: 0px 1.25rem;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem;
        height: auto;
        margin-left: 1.25rem;
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem;
    left: 0;
    width: 100%;
    border-radius: 0.625rem;
    max-height: 18.75rem;
    overflow-y: auto;
`;
 
const Opcion = styled.div`
    padding: 1.25rem;
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem;
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

const SelectCategorias = ({categoria, cambiarCategoria}) => {
	const [mostrarSelect, cambiarMostrarSelect] = useState(false);
	
	const categorias = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud e higiene', texto: 'Salud e Higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'diversion', texto: 'Diversion'}
    ]

	const handleClick = (e) => {
		cambiarCategoria(e.currentTarget.dataset.valor);
	}

	return (
		<ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
			<OpcionSeleccionada>{categoria} <IconoDown /></OpcionSeleccionada>

			{mostrarSelect &&
				<Opciones>
					{categorias.map((categoria) => {
						return <Opcion 
									key={categoria.id}
									data-valor={categoria.id}
									onClick={handleClick}
								>
									<IconoCategoria id={categoria.id} />
									{categoria.texto}
								</Opcion>
					})}
				</Opciones>
			}
		</ContenedorSelect>
	);
}
 
export default SelectCategorias;