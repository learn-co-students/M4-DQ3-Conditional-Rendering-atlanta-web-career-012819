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

  handleClick = (e) => {
    console.log(e.target.id)
    this.setState({
      active: e.target.id
    })
  }

  render() {

    
    const components = {
      profile: Profile,
      cocktail: Cocktails,
      photo: Photos,
      pokemon: Pokemon
    }

    
    const ComponentName = components[this.state.active]

    return (
      <div>
        <MenuBar active={this.state.active} onUserClick={this.handleClick}/>
        <ComponentName />
      </div>
    )
  }

}

export default MainBox
