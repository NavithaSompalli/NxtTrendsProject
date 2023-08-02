import {Component} from 'react'
import SlideContext from '../../Context'

import './index.css'

class Slides extends Component {
  state = {
    activeHeading: true,
    activeDescription: true,
  }

  changeHeading = () => {
    this.setState({activeHeading: false})
  }

  changeDescription = () => {
    this.setState({activeDescription: false})
  }

  render() {
    const {activeHeading, activeDescription} = this.state

    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurChangeEventDescription = event => {
            if (event.target.value === ' ') {
              changeDescription('Description')
            }

            this.setState({activeDescription: true})
          }

          const onBlurChangeEventHeading = event => {
            if (event.target.value === ' ') {
              changeDescription('Heading')
            }

            this.setState({activeHeading: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-container">
              <div>
                {activeHeading ? (
                  <h1 onClick={this.changeHeading} className="heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurChangeEventHeading}
                    className="input-heading"
                  />
                )}
              </div>
              <div>
                {activeDescription ? (
                  <h1 onClick={this.changeDescription} className="description">
                    {description}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurChangeEventDescription}
                    className="input-description"
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slides
