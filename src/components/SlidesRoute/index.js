import {Component} from 'react'

import SlideItemsList from '../SlideItemsList'

import Slides from '../Slides'

import './index.css'
import SlideContext from '../../Context'

class SlidesRoute extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value

          return (
            <div className="slider-container">
              <ol className="ol-container">
                {initialList.map((eachItem, index) => (
                  <SlideItemsList
                    details={eachItem}
                    key={eachItem.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slides />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlidesRoute
