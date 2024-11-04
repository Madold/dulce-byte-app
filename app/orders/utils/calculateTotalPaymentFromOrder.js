
export const calculateTotalPaymentFromOrder = (order) => { 
    let total = 0;

    if (!order) {
        return total;
    }

    order.products.forEach(product => {
        const price = product.cookie.price;
        const quantity = product.quantity;
        total += price * quantity;
    });

    return total;
}