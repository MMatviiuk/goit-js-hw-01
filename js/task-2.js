// Функція для формування повідомлення про доставку товару
function getShippingMessage(country, price, deliveryFee) {
    // Обчислення загальної вартості замовлення з урахуванням доставки
    const totalPrice = price + deliveryFee;
    // Повернення повідомлення про доставку
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  // Виклики функції для перевірки роботи
  console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
  