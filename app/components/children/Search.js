// Include React
var React = require("react");

// Including create-react-class as a replacement for the React.createClass per React's documentation
// See https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.createclass
var createReactClass = require('create-react-class');

// Create the Search component
var Search = createReactClass({

  // Here we render the component
  render: function() {

    return (
      <div></div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
