// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Including create-react-class as a replacement for the React.createClass per React's documentation
// See https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.createclass
var createReactClass = require('create-react-class');

// Create the Main component
var Main = createReactClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      searchTerm: "",
      startYear: "",
      endYear: "",
      results: [],
      history: []
    }
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o">
            </i> New York Times Search</strong>
          </h1>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="searchTerm">Search Term:</label>
                    <input
                      value={this.state.searchTerm}
                      type="text"
                      className="form-control text-center"
                      id="searchTerm"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label for="startYear">Start Year (Optional):</label>
                    <input
                      value={this.state.startYear}
                      type="text"
                      className="form-control text-center"
                      id="startYear"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label for="endYear">End Year (Optional):</label>
                    <input
                      value={this.state.endYear}
                      type="text"
                      className="form-control text-center"
                      id="endYear"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <Link to="/Search">
                    <button type="submit" className="btn btn-default" id="runSearch">
                      <i className="fa fa-search"></i> Search
                    </button>
                  </Link>

                  <Link to="/">
                    <button type="button" className="btn btn-default" id="clearAll">
                      <i className="fa fa-trash"></i> Clear Results
                    </button>
                  </Link>
                </form>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Added this.props.children to dump all of the child components into place */}
          {this.props.children}
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
