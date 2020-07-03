  
import React from 'react';

function CartButton({ className, icon, onClick }) {
    return (
        <a onClick={onClick} href="#" className={`${className} cart-button`}>
            <i className={icon} />        
        </a>
    )
}

export default CartButton;