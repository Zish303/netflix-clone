import './App.css';
import Row from './Row.js';
import Banner from './Banner.js';
import Nav from './Nav.js';
import request from './requests';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netfilx Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Crime Movies" fetchUrl={request.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Drama" fetchUrl={request.fetchDramaMovies} />
      <Row title="Family Movies" fetchUrl={request.fetchFamilyMovies} />
      <Row title="Fantasy Movies" fetchUrl={request.fetchFantasyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Music Movies" fetchUrl={request.fetchMusicMovies} />
      <Row title="Mystery Movies" fetchUrl={request.fetchMysteryMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="SciFi Movies" fetchUrl={request.fetchSciFiMovies} />
      <Row title="Thriller Movies" fetchUrl={request.fetchThrillerMovies} />
      <Row title="War Movies" fetchUrl={request.fetchWarMovies} />
      <Row title="Western Movies" fetchUrl={request.fetchWesternMovies} />
    </div>
  );
}

export default App;