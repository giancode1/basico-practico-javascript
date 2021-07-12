function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
//CUPONES
const coupons = [
    {
        name: "dia_loco",
        discount: 15,
    },
    {
        name: "ecua21",
        discount: 30,
    },
    {
        name: "omg_descuento",
        discount: 45,
    },
];

function ValidateCoupon(){
    const inputCoupon = document.getElementById("userCoupon");
    const userCoupon = inputCoupon.value;

    const coupon = coupons.find( c => c.name === userCoupon);
    const resultC = document.getElementById("ResultC");

    if (!coupon) {
        resultC.innerText = "Su cupón no es válido"
        alert(`El cupón ${userCoupon} no es válido`);
    }
    else{
        resultC.innerText = "Su cupón es válido con descuento: "+  coupon.discount +"%";
    }
}




