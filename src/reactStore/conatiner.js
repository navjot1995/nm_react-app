import { useSelector, useDispatch } from 'react-redux';

import {accesstoken} from './action';

const Test = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    return <>
        <div className="test">
            <div className="hometest">
                <h1>{token}</h1>
                <button aria-label="Decrement value" onClick={() => dispatch(accesstoken())}
        >Test</button>
            </div>
        </div>
        </>
}

export default Test;