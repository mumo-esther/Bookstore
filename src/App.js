import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import BookList from './components/BookList/BookList';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
