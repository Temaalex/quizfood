import { Routes, Route } from 'react-router-dom';
import Error from "./components/ContentError";

import QuizVar from './components/QuizVar';

import QuizBoss from './components/QuizBoss';
import QuizText from './components/QuizText';
import TheEnd from './components/TheEnd';
import ToBoss from './components/toBoss'
import ErrorBoss from './components/ContentErrorToBoss'


function App() {
  return (
    <Routes>
     
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* все кроме */}
      <Route path="*" element={<h1>404 Not Found</h1>} />

{/* Все задачи по карте */}
<Route path="/1" element={<QuizVar/>} />
<Route path="/2" element={<QuizVar/>} />
<Route path="/3" element={<QuizVar/>} />
<Route path="/4" element={<QuizVar/>} />
<Route path="/5" element={<QuizVar/>} />
<Route path="/6" element={<QuizVar/>} />
<Route path="/7" element={<QuizVar/>} />
<Route path="/8" element={<QuizVar/>} />
<Route path="/9" element={<QuizVar/>} />
<Route path="/10" element={<QuizText/>} />
<Route path="/11" element={<QuizText/>} />
<Route path="/12" element={<QuizVar/>} />
<Route path="/13" element={<QuizVar/>} />
<Route path="/14" element={<QuizText/>} />
<Route path="/15" element={<QuizText/>} />
<Route path="/16" element={<QuizVar/>} />
<Route path="/17" element={<QuizText/>} />
<Route path="/18" element={<QuizText/>} />
<Route path="/19" element={<QuizText/>} />
<Route path="/20" element={<QuizText/>} />
<Route path="/21" element={<QuizText/>} />
<Route path="/22" element={<QuizText/>} />
<Route path="/23" element={<QuizText/>} />
<Route path="/24" element={<QuizText/>} />
<Route path="/25" element={<QuizText/>} />
<Route path="/26" element={<QuizText/>} />
<Route path="/27" element={<QuizText/>} />
<Route path="/28" element={<QuizText/>} />
<Route path="/29" element={<QuizText/>} />
<Route path="/30" element={<QuizText/>} />

{/* Ссылка на босса */}
<Route path="/toBoss" element={<ToBoss/>} />
<Route path="/ErrorBoss" element={<ErrorBoss/>} />
{/* Босс */}
<Route path="/32" element={<QuizBoss/>} />
{/* Финиш */}
<Route path="/TheEnd" element={<TheEnd/>} />
{/* 
+?доделать ошибки (блокировка на 10 сек) 2шт
+?чискта локалсторидж финиша
-Полная проверка
*/}


    </Routes>
  );
}

export default App;
