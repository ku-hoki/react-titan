import './index.scss';

import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AllMaterials from './pages/AllMaterials';

const arrCardCourse = [
  { title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png' },
  { title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png' },
  { title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png' },
  { title: 'Новый курс', topicCourse: 'Основы управления проектами', imgUrl: '/img/women-1.png' },
];

const arrCardTest = [
  { title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg' },
  { title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg' },
  { title: "Название теста", description: 'Описание теста в две-три строки', imgUrl: '/img/card-test.jpg' },


];

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element={<Main />}
        />

        <Route 
          path='/materials'
          element={<AllMaterials />}
        />
      </Routes>

    </div>

  );
}

export default App;
