import {Component} from 'react'

import SlideContext from '../../Context'

import './index.css'

class SlideItemsList extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details

    return (
      <SlideContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyling = isActive ? 'active-styling' : ''
          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
            >
              <p className="serial-number">{serialNumber}</p>
              <div className="shadow-box-container">
                <p className="item-heading">{heading}</p>
                <p className="item-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlideItemsList
