import { Link } from 'react-router-dom';

import './index.scss';

const App = () => {
    return (
        <div className='container'>
            <Link className='btn' to='/table'>Show table</Link>
            <Link className='btn' to='/chart'>Show chart</Link>
        </div>
    )
};

export default App;