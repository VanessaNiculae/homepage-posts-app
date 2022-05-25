import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData'
import { Link } from 'react-router-dom';
import './App1';

function App() {
  return (
    <>

      <div className='background-color'>

        <div className='button-layout'>

          <Link to="Repositories" >
            <button className='button'>
              See my posts.
            </button>
          </Link>

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
