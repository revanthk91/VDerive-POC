import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LC from 'literallycanvas'
import './Test.css'
import ImageGallery from 'react-image-gallery'
import defaultOptions from "literallycanvas/lib/js/core/defaultOptions";
import LiterallyCanvas from "literallycanvas/lib/js/core/LiterallyCanvas";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export class Test extends Component {
    constructor(props) {
      super(props);
        
      defaultOptions.tools = [LC.tools.Eraser, LC.tools.Line, LC.tools.Rectangle,LC.tools.Text,LC.tools.SelectShape]
      
      this.lc = new LiterallyCanvas(defaultOptions);
      this.lc.tool.SelectShape

        //this.lc = null;
    }
  /* componentDidMount() {
    const target = new Image()
    target.src = images[0].original

    var canvas = document
      .getElementsByClassName('lc-drawing')
      .item(0)
      .firstChild.getContext('2d')

    canvas.drawImage(
      target,
      0,
      0,
      document.getElementsByClassName('lc-drawing').item(0).firstChild.width,
      document.getElementsByClassName('lc-drawing').item(0).firstChild.height,
    )
  } */
/* 
  save() {
    localStorage.setItem('drawing', JSON.stringify(this.lc.getSnapshot()))
    this.setState({ svgText: this.lc.getSVGString() })
  }
 */
  editinfo = (index) => {
    const target = new Image()
    target.src = images[index].original

    var canvas = document
      .getElementsByClassName('lc-drawing')
      .item(0)
      .firstChild.getContext('2d')

    canvas.drawImage(
      target,
      0,
      0,
      document.getElementsByClassName('lc-drawing').item(0).firstChild.width,
      document.getElementsByClassName('lc-drawing').item(0).firstChild.height,
    )

    this.setState({
      image: target.src,
    })
  }
  
  handleClick = () => {
    console.log('lc TON-->',this.lc);
    console.log('lc SVG String-->',this.lc.getSVGString());
    console.log('lc TON  IMAGE-->',this.lc.getImage());
    console.log('lc TON  SNAPSHOT-->',JSON.stringify(this.lc.getSnapshot()));
    console.log('lc-->',this.lc.getImage().toDataURL());
  }

  handleDeleteElem = () => {
    //TODO
    const selectedShape = this.lc.tool.selectedShape;
    
    
    //if the selected item is not empty
    if(selectedShape) {
      

      //get snapshot of current Shapes
      let currentSnapshot = this.lc.getSnapshot();
      
      
          

      //remove that shape
      currentSnapshot.shapes = currentSnapshot.shapes.filter(x => x.id != selectedShape.id)

      this.lc.setShapesInProgress([]);


      //remove selectedShape Data, To prevent double deleting elements sunder
      this.lc.tool.selectedShape = null

      //ReDraw the canvas from snapshot
      this.lc.loadSnapshot(currentSnapshot)
      

      //Deselect the Selected Area, so we can select again.
      this.lc.setTool(new LC.tools.SelectShape(this.lc))

    }

  }

  loadOnClick = () => {
    //this.lc.getSnapshotJSON();
    //Sample below ,
    var snapshotJSON =
'{"colors":{"primary":"hsla(0, 0%, 0%, 1)","secondary":"hsla(0, 0%, 100%, 1)","background":"transparent"},"position":{"x":0,"y":0},"scale":1,"shapes":[{"className":"LinePath","data":{"order":3,"tailSize":3,"smooth":true,"pointCoordinatePairs":[[121,124],[124,124],[136,124],[162,124],[242,124],[292,124],[344,124],[400,124],[514,124],[565,124],[605,124],[643,124],[644,124]],"smoothedPointCoordinatePairs":[[121,124],[121.005859375,124],[121.0234375,124],[121.05859375,124],[121.1171875,124],[121.205078125,124],[121.328125,124],[121.4921875,124],[121.703125,124],[121.97265625,124],[122.3125,124],[122.734375,124],[123.25,124],[123.87109375,124],[124.609375,124],[125.4765625,124],[126.484375,124],[127.642578125,124],[128.9609375,124],[130.44921875,124],[132.1171875,124],[133.974609375,124],[136.03125,124],[138.296875,124],[140.78125,124],[143.5625,124],[146.71875,124],[150.328125,124],[154.46875,124],[159.21875,124],[164.65625,124],[170.859375,124],[177.90625,124],[185.6328125,124],[193.875,124],[202.46875,124],[211.25,124],[220.0546875,124],[228.71875,124],[237.078125,124],[244.96875,124],[252.453125,124],[259.59375,124],[266.453125,124],[273.09375,124],[279.578125,124],[285.96875,124],[292.328125,124],[298.71875,124],[305.14453125,124],[311.609375,124],[318.1171875,124],[324.671875,124],[331.27734375,124],[337.9375,124],[344.65625,124],[351.4375,124],[358.38671875,124],[365.609375,124],[373.2109375,124],[381.296875,124],[389.97265625,124],[399.34375,124],[409.515625,124],[420.59375,124],[432.341796875,124],[444.5234375,124],[456.90234375,124],[469.2421875,124],[481.306640625,124],[492.859375,124],[503.6640625,124],[513.484375,124],[522.421875,124],[530.578125,124],[538.0546875,124],[544.953125,124],[551.375,124],[557.421875,124],[563.1953125,124],[568.796875,124],[574.244140625,124],[579.5546875,124],[584.74609375,124],[589.8359375,124],[594.841796875,124],[599.78125,124],[604.671875,124],[609.53125,124],[614.291015625,124],[618.8828125,124],[623.23828125,124],[627.2890625,124],[630.966796875,124],[634.203125,124],[636.9296875,124],[639.078125,124],[640.71875,124],[641.921875,124],[642.7578125,124],[643.296875,124],[643.609375,124],[643.765625,124],[643.8359375,124],[643.890625,124],[643.931640625,124],[643.9609375,124],[643.98046875,124],[643.9921875,124],[643.998046875,124],[644,124]],"pointSize":5,"pointColor":"hsla(0, 0%, 0%, 1)"},"id":"615feb49-2573-fb28-aef7-6876532fa309"},{"className":"Text","data":{"x":665,"y":119,"text":"Test","color":"hsla(0, 0%, 0%, 1)","font":"18px \"Helvetica Neue\",Helvetica,Arial,sans-serif","forcedWidth":0,"forcedHeight":0,"v":1},"id":"d22fb7cd-a730-9c87-1704-23f2df9ae8db"}],"backgroundShapes":[],"imageSize":{"width":"infinite","height":"infinite"}}';
    this.lc.loadSnapshotJSON(snapshotJSON);
}

  render() {
    return (
      <React.Fragment>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <div style={{ height: '80vh' }}>
          <LC.LiterallyCanvasReactComponent lc={this.lc}/>
          </div>
          <div style={{ flex: 1, position: 'absolute', bottom: 0 }}>
            <ImageGallery
              items={images}
              onSlide={this.editinfo}
              showBullets={false}
              showPlayButton={false}
              showNav={false}
              showFullscreenButton={false}
            />
          </div>
           <div>
        <button onClick={() => {this.handleClick()}}>Export</button>
        <button onClick={() => {this.loadOnClick()}}>Load</button>
        <button onClick={() => {this.loadOnClick()}}>Upload</button>
        <button style={{color:'blue'}} onClick={this.handleDeleteElem}>Delete Element</button>
      </div>
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(Test)
