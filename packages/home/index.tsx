import React from 'react';
import ReactDom from "react-dom";
import { App } from '@packages/home/container/app';

const ele = <div>
    hello word
    <App/>
</div>
ReactDom.render(ele,document.getElementById('root'))