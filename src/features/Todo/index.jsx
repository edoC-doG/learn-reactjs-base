import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from 'components/NotFound';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            TODO SHARE UI
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}
export default TodoFeature;