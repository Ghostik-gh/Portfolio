import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './food-api/src/components/Recipe';
import { FoodAPI } from './pages/FoodAPI';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="/food-api/" element={<FoodAPI />} />
          <Route path="/food-api/category/:name" element={<Category />} />
          <Route path="/food-api/meal/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
