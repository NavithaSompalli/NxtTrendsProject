import {v4 as uuid4} from 'uuid'
import SlideContext from '../../Context'

import './index.css'

const NewButton = () => (
  <SlideContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onCickAddButton = () => {
        const id = uuid4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <button type="button" onClick={onCickAddButton} className="new-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="new-plus-icon"
          />
          <span className="new-name">New</span>
        </button>
      )
    }}
  </SlideContext.Consumer>
)

export default NewButton
