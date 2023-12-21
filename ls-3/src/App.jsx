import './App.css'
import Slider from "./components/Slider/Slider.jsx";

function App() {

    const imgObj = {images:
            [
                '../../../src/assets/images/slider/1.jpg',
                '../../../src/assets/images/slider/2.jpg',
                '../../../src/assets/images/slider/3.jpg',
                '../../../src/assets/images/slider/4.jpg',
                '../../../src/assets/images/slider/5.jpg',
            ]
    };

    return (
        // 1) Реализуйте бесконечную карусель изображений
      // 2) Изображение отправить как пропс в компонент Slider
      // 3) Стилизация

   <div>
       <Slider {...imgObj}/>
   </div>
  )
}

export default App
