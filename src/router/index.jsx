import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './assembly'

export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />

                </Switch>
            </BrowserRouter>
        )
    }
}
