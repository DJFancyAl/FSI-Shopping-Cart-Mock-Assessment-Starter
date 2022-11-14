let cartItems = document.querySelectorAll('.cart-item')
let prices = []

if(cartItems.length > 0){
    for(let i = 0; i < cartItems.length; i++){
        let quantityDown = cartItems[i].querySelector('#quantity-down')
        let quantityUp = cartItems[i].querySelector('#quantity-up')
        let totalQuantity = cartItems[i].querySelector('.total-quantity')
        let price = cartItems[i].querySelector('#price')
        prices[i] = price.textContent.match('[0-9]+\.[0-9]+')[0]
        let itemPrice = cartItems[i].querySelector('.item-price')
        let removeButton = cartItems[i].querySelector('.remove')
        let quantity = 1
        
    
        quantityDown.addEventListener('click', () => {
            if(quantity > 0){
                quantity -= 1
                let totalPrice = prices[i] * quantity
                itemPrice.textContent = 'Price: $' + totalPrice.toFixed(2)
            } else {
                let remove = window.prompt('Are you sure you want to remove this item? (Yes or No)')
    
                if(remove.toLowerCase() === 'yes'){
                    let remainingItems = document.querySelectorAll('.cart-item')
                    if(remainingItems.length > 1){
                        cartItems[i].remove() 
                    }else{
                        cartItems[i].textContent = 'No items in cart...'
                    }
                                                           
                }else if(remove.toLowerCase() === 'no'){
                    null
                }else{
                    window.alert('Answer must be Yes or No.')
                }
            }
            totalQuantity.textContent = 'Quantity: ' + quantity   
        })
    
        quantityUp.addEventListener('click', () => {
            quantity += 1
            totalQuantity.textContent = 'Quantity: ' + quantity
            let totalPrice = prices[i] * quantity
                itemPrice.textContent = 'Price: $' + totalPrice.toFixed(2)
        })

        removeButton.addEventListener('click', () => {
            let remainingItems = document.querySelectorAll('.cart-item')
            if(remainingItems.length > 1){
                cartItems[i].remove() 
            }else{
                cartItems[i].textContent = 'No items in cart...'
            }
        })
    }
}


