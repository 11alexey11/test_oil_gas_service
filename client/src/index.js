import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import { App } from './components/App';
import { TablePage } from './pages/TablePage';
import { ChartPage } from './pages/ChartPage';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> }/>
                <Route path='/table' element={ <TablePage /> }/>
                <Route path='/chart' element={ <ChartPage /> }/>
            </Routes>
        </BrowserRouter>
    </Provider>
);