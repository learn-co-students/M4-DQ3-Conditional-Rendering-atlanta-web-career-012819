import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state ={
      active: "profile"
    }
  }

  handleClick = (e)=>{
    this.setState({
      active: e.target.id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
  //  const TagName = this.props.tag;
  //   return <TagName />
  // components = {
  //   foo: FooComponent,
  //   bar: BarComponent
  // };
  //const detailsToDisplay = componentName
  const components = {
    profile: Profile,
    cocktail: Cocktails,
    photo: Photos,
    pokemon: Pokemon
  }
  // const ComponentName = components['cocktail']
  const ComponentName = components[this.state.active]

    return (
      <div>
        <MenuBar active={this.state.active} onUserClick={this.handleClick} />
        <ComponentName  />
        {/* //Component from Pages.js */}
      </div>
    )
  }

}

export default MainBox
