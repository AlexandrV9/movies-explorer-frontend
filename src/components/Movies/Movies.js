import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './components-movies/SearchForm/SearchForm';
import MoviesCardList from './components-movies/MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;