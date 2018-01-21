import printMe from './print';

printMe();

if (module.hot) {
  module.hot.accept('./print.js', function() {
    printMe();
  });
}
