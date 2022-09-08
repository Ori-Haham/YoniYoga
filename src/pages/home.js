import AboutMe from '../components/HomeComponents/AboutMe';
import ClassCard from '../components/HomeComponents/ClassCard';

function Home() {
  return (
    <div className='page'>
      <div className='cover'>
        <div className='cover__text-container'>
          <h1 className='cover__title'>יוני לוגו</h1>
          <h2 className='cover__subtitle'>מוטו/סלוגן</h2>
        </div>
      </div>

      <AboutMe />
      <div className='color-line'></div>
      <ClassCard />
      <div className='color-line'></div>
      <div className='about-me'>
        <div className='about-me__img'>תמונה</div>
        <div className='about-me__text-container'>
          <h2 className='about-me__title'> שם של קורס שאני רוצה לקדם</h2>
          <p className='about-me__subtitle'>הסבר על הקורס </p>
        </div>
      </div>
      <div className='quote'>
        <p className='quote__text'>"אם תתאמן עם יוני תיהיה חזק וגמיש כמוני"</p>
        <p className='quote__athor'>ז'אן קולוד ואן דאם</p>
      </div>
      <div className='contact-me'>
        <div className='contact-me__facebook'>
          <h3>פייסבוק</h3>
        </div>
        <div className='contact-me__instagram'>
          <h3>אינסטגרם</h3>
        </div>
        <div className='contact-me__ditails'>
          <h3>צור קשר</h3>
        </div>
        <div className='contact-me__ditails'>
          <h3>דבר איתי</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
