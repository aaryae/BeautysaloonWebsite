const designerhair = document.querySelector("#designerhair");
const thapna = document.querySelector(".thapna");
const learnmore = document.querySelector("#learnmore");
const secthapna = document.querySelector("#addpara");
const list = document.querySelector(".fa-list");
const secondpart = document.querySelector(".secondpart");
const cross = document.querySelector(".fa-xmark");
const addpara = document.getElementById("addpara");
const productlist = document.getElementById("productlearnmore");
const hiddenBoxes = document.querySelectorAll(".boxes:nth-child(n+5)");
const addedButtons = document.querySelectorAll(".added");
const closecart=document.querySelector(".closethis")
const cart = document.querySelector(".fa-cart-shopping");
const items = document.querySelector(".items");
const price = document.querySelector(".price");
const closekaro = document.querySelector(".fa-2x");
const total = document.querySelector(".total");
const thankyou=document.querySelector("#thankyou")

let n = 1;
const newpara = document.createElement("p");

newpara.textContent =
"Operating from out spectacular location in Kirtipur,Kathmandu.we Set free your desire to stand out in a crowd with world class desinger hair color from RLBS.Enjoy the luxury afforded by our exceptional spectrum of colors, from rich reds to abundant browns to brilliant blondes.";
const stringvalues =
    ["Carrot Sunscreen Lotion", "cucumber sunscreen lotion", "Neem & Tea Tree Face Wash", "Lavender Face Wash", "SunBlock lotion", "CG Bag(grey)", "EyeLiner", "Keratin Sampoo"];
const stringprice =
    [100, 234, 456, 321, 345, 567, 76, 90];


designerhair.addEventListener("click", () => {
    thapna.appendChild(newpara);
    designerhair.innerHTML = "no more";
})

learnmore.addEventListener("click", () => {
    secthapna.appendChild(newpara);
    learnmore.innerHTML = "no more";
})


list.addEventListener("click", () => {
    list.style.display = "none";
    secondpart.style.display = "block";
});

cross.addEventListener("click", () => {
    secondpart.style.display = "none";
    list.style.display = "block";
});


productlist.addEventListener("click", () => {
    hiddenBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.display = "flex";

        }, index * 400);
    });
});

addedButtons.forEach((button) => {
    button.addEventListener("click", () => {

        setInterval(function () {
            cart.style.color = "rgb(180, 0, 0)";
        }, 500);
        cart.innerHTML = n;
        n++;
    });

});

let number = 0;
// const clickCount = new Map();
addedButtons.forEach((button, index) => {
//   clickCount.set(button, 0); 
  button.addEventListener("click", () => {
    // const count = clickCount.get(button) + 1; 
      const itemspara = document.createElement("p");
      const pricepara = document.createElement("p");
    // clickCount.set(button, count); 
    // console.log(`${stringvalues[index]} * ${count}`);
      itemspara.innerHTML = `${stringvalues[index]} <i class="fa-solid fa-minus fa-fade" style="color: #c20000;cursor:pointer;float:none;margin-left:10px;"></i>`; 
      pricepara.innerHTML = stringprice[index];
      items.appendChild(itemspara);
      price.appendChild(pricepara);
      
     
    const minusIcon = itemspara.querySelector(".fa-minus");
    minusIcon.addEventListener("click", () => {
        items.removeChild(itemspara);
        price.removeChild(pricepara);
    });
    let count = number + stringprice[index];
    number = count;
    total.innerText ="Total =Nrs "+number;
      const clear = document.querySelector(".clearall");
      clear.addEventListener("click",()=> {
          items.removeChild(itemspara);
          price.removeChild(pricepara);
          total.innerText = 0;
      })
      
      
    });
});
closekaro.addEventListener("click", () => {
    closecart.style.display = "none";
})

cart.addEventListener("click", () => {
    closecart.style.display = "block";
})

thankyou.addEventListener("click", () => {
    alert("You rich");
})