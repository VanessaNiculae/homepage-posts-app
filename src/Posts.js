
import React from 'react'
import GithubRepo from './components/GithubRepo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Posts() {
    return (
        // <BrowserRouter>
        //     <Switch>
        //         <Route path="/">
        <GithubRepo />
        //          </Route>
        //     </Switch>
        // </BrowserRouter> 
    );
}

export default Posts;
