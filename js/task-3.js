// Функція для обчислення загальної ширини елемента
function getElementWidth(content, padding, border) {
    // Перетворення рядкових значень у числові, видалення 'px' та обчислення ширини контенту
    const contentWidth = parseFloat(content); 
    // Обчислення ширини паддінгу для обох сторін
    const paddingWidth = parseFloat(padding) * 2; 
    // Обчислення ширини бордера для обох сторін
    const borderWidth = parseFloat(border) * 2; 
    // Розрахунок загальної ширини елемента
    const totalWidth = contentWidth + paddingWidth + borderWidth; 
    // Повернення загальної ширини
    return totalWidth;
  }
  
  // Виклики функції для перевірки роботи
  console.log(getElementWidth('50px', '8px', '4px')); // 74
  console.log(getElementWidth('60px', '12px', '8.5px')); // 101
  console.log(getElementWidth('200px', '0px', '0px')); // 200
  