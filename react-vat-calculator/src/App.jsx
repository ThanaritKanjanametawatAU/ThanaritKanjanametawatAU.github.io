import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function reCalculate(originalPrice, discount) {
    const vatRate = 0.07;
    const discountedPrice = originalPrice - discount;
    const vat = Math.round(discountedPrice * vatRate);
    const netPrice = Math.round(discountedPrice + vat);

    return { discountedPrice, vat, netPrice };
}

function App() {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [netPrice, setNetPrice] = useState(0);

  function handleOriginalPriceInput(event) {
    const newOriginalPrice = parseFloat(event.target.value) || 0;
    setOriginalPrice(newOriginalPrice);
    updatePrices(newOriginalPrice, discount);
  }

  function handleDiscountInput(event) {
    const newDiscount = parseFloat(event.target.value) || 0;
    setDiscount(newDiscount);
    updatePrices(originalPrice, newDiscount);
  }

  function updatePrices(originalPrice, discount) {
    const result = reCalculate(originalPrice, discount);
    
    setDiscountedPrice(result.discountedPrice);
    setVat(result.vat);
    setNetPrice(result.netPrice);
  }


  function reCalculate(originalPrice, discount) {
    const vatRate = 0.07;
    const discountedPrice = originalPrice - discount;
    const vat = discountedPrice * vatRate;
    const netPrice = discountedPrice + vat;

    return { discountedPrice, vat, netPrice };
}

  return (
    <>
      <div>
        <p className='InputPrompt'>
          Price ($):
          <input type='number' value={originalPrice} onChange={handleOriginalPriceInput} />
        </p>
        <p className='InputPrompt'>
          Discount ($):
          <input type='number' value={discount} onChange={handleDiscountInput} />
        </p>
        <p className='OutputPrompt'>
          Price Before Discount: $ {originalPrice.toFixed(2)}
          <br />
          Discount: $ {discount.toFixed(2)}
          <br />
          Price After Discount: $ {discountedPrice.toFixed(2)}
          <br />
          VAT: $ {vat.toFixed(2)}
          <br />
          Net Price: $ {netPrice.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default App;
