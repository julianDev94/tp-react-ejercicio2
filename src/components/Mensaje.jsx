import React from 'react';

const Mensaje = ({valorMensaje}) => {
    return (
        <section>
            <p className='fs-3 fw-bold'>Hello {valorMensaje}</p>
        </section>
    );
};

export default Mensaje;