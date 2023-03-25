import Header from '../components/Header';
import { images } from '../constants';

function Home() {
  return (
    <main className="App">
      <Header />
      <img src={images.corolla_2021} data-testId="img" alt="random car" />
    </main>
  );
}

export default Home;
