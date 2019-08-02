import React from 'react'

const NotFound404 = () => (
    <div class="alert alert-warning container my-5" role="alert">
        Opps! No encontramos esta dirección: <strong>{window.location.pathname}</strong>
    </div>
);

export default NotFound404;