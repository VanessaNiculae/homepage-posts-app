import './App.css';
import './Posts.js';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData'


function App() {
  return (
    <>
      <div className='background-color'>

        <div className='button-layout'>
          <a href='./Posts.js' target='_blank'>
            <button className='button'>
              See my posts.
            </button>
          </a>
        </div>

        <div>
          <ImageSlider slides={SliderData} />
        </div>

        <div className='introduction'>
          <header>

            Hello my name is Vanessa. <br />
            I love my dogs (I'm an animal lover), making people laugh, <br />
            travelling, playing guitar, creating memories and photograph them.

          </header>
        </div>
      </div>
    </>
  );

}

export default App;
