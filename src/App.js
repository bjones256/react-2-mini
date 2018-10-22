import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

  constructor(){
    super()
    this.state = {
      canEdit : 'true',
      color: 'red',
      size: 25,
      family: 'monospace',
    }
    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this)
  }

  updateColor(val){
    this.setState({ color : val});
    // console.log(val)
  }

  updateSize(val){
    this.setState({ size : val});
  }

  updateFamily(val){
    this.setState({ family: val });
  }

  updateEditStatus(val){

    this.setState({ canEdit: val });

  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} canEdit={this.state.canEdit}/>
          <SizeChanger update={this.updateSize} canEdit={this.state.canEdit}/>
          <FamilyChanger update={this.updateFamily} canEdit={this.state.canEdit}/>
        </div>
        <div className="textArea">
          <TextContainer color={this.state.color} family={this.state.family}/>
        </div>

        {/* {console.log(this.state.size)} */}

      </div>
    )
  }
}

export default App;
