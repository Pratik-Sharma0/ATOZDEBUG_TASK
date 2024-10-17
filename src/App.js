import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Lane from './components/Lane';
import SubredditSearch from './components/SubredditSearch';
import { addLane, removeLane } from './features/lanes/lanesSlice';
import { useSelector, useDispatch } from 'react-redux';
import './styles/App.css';

const App = () => {
  const lanes = useSelector((state) => state.lanes.lanes || []);
    const dispatch = useDispatch();

    const handleAddLane = (subreddit) => {
        dispatch(addLane(subreddit));
    };

    const handleRemoveLane = (subreddit) => {
        dispatch(removeLane(subreddit));
    };

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <h1>REDDIT LANES</h1>
                    <SubredditSearch onAddLane={handleAddLane} />
                    <div className="lanes-container">
                        {lanes.map((lane) => (
                            <Lane
                                key={lane.subreddit}
                                subreddit={lane.subreddit}
                                onRemove={handleRemoveLane}
                            />
                        ))}
                    </div>
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
