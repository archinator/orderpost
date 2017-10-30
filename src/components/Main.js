import React from 'react';
import ResultsContainer from '../containers/ResultsContainer';
import ShopsListContainer from '../containers/ShopsListContainer'

const Main = () => (
    <div className="row">
        <ShopsListContainer />
        {/*<SearchContainer />*/}
        <ResultsContainer />
    </div>
)

export default Main;
