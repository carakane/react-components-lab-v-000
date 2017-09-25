// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

class OlderCoaster extends React.Component{
  render() {
    return React.createElement('div', {className: 'oldercoaster'},
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('ul', {},
        [React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel')]))
  }
}

<div class="oldercoaster">
  <p>Two grannies having the time of their life!</p>
  <p>Passengers:</p>
  <ul>
    <li>Agnes</li>
    <li>Muriel</li>
  </ul>
</div>



const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {};
export class InFrontOfYou extends React.Component {};
export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
