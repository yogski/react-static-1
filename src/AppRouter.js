import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SplashContainer from './components/splashContainer';
import ContentWrapper from './components/contentWrapper';
import QuestionForm from './components/questionForm';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/form">
                        <QuestionForm />
                    </Route>
                    <Route path="/">
                        <SplashContainer />
                        <ContentWrapper />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;