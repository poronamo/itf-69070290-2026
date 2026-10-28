const foods = [
  {
    name: "ข้าวมันไก่",
    desc: "ข้าวมันหอมนุ่มเสิร์ฟพร้อมไก่นุ่มและน้ำจิ้มเต้าเจี้ยวรสเด็ด",
    price: "50 - 65",
    img: "https://images.unsplash.com/photo-1626804475297-4160820ce4ec?w=600&auto=format&fit=crop"
  },
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจันท์เหนียวนุ่มผัดซอสผัดไทยรสกลมกล่อม ใส่กุ้งสดตัวโต",
    price: "60 - 80",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop"
  },
  {
    name: "กะเพราหมูกรอบ",
    desc: "หมูกรอบผัดใบกะเพราเผ็ดร้อน รสชาติเข้มข้นถึงใจ",
    price: "55 - 70",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop"
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    desc: "ต้มยำกุ้งรสเผ็ดเปรี้ยว ครบรสสมุนไพรไทย พร้อมกุ้งสดนุ่ม",
    price: "80 - 120",
    img: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?w=600&auto=format&fit=crop"
  },
  {
    name: "ข้าวซอยไก่",
    desc: "แกงคั่วกะทิรสเข้มข้นใส่เส้นบะหมี่และไก่นุ่ม กรุบกรอบด้วยหมี่กรอบ",
    price: "60 - 75",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
  }
];

const foodImg = document.getElementById('food-img');
const foodName = document.getElementById('food-name');
const foodDesc = document.getElementById('food-desc');
const foodPrice = document.getElementById('food-price');
const randomBtn = document.getElementById('random-btn');

randomBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const selectedFood = foods[randomIndex];

  foodImg.src = selectedFood.img;
  foodName.textContent = selectedFood.name;
  foodDesc.textContent = selectedFood.desc;
  foodPrice.textContent = selectedFood.price;
});