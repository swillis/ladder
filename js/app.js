var App = React.createClass({
  getInitialState:function(){
    return {
      txt: ''
    }
  },
  update: function(e){
    this.setState({txt: e.target.value});
  },
  render:function(){
    return (
      <div>
        <input type="text" onChange={this.update} />
        <br />
        <b>{this.state.txt}</b>
      </div>
    );


  }
});

var Widget = createClass({
  render:function () {
    return
  }
});

React.render(<App txt ="this is the txt prop" />, document.body);
//
// var App = React.createClass({
//     render: function() {
//       return (
//         <h1>Hello</h1>
//       );
//     }
// })
//
// React.render(<App />, document.body);
