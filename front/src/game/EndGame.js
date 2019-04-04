import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class EndGame extends Component {
  render() {
    const score = this.props.TimerStore.times.map((time, i) => {
      return (
        <div key={i}>
          votre temps pour le niveau {time.level} est de {time.time}
        </div>
      )
    })
    return (
      <div>
        Bravo, vous avez fini le jeu
        <h2>
          Votre score est:
        </h2>
        {this.hasCheated() ? <h1>TRICHEUR!!!</h1> : score}
      </div>
    )
  }

  hasCheated = () => {
    if(this.props.TimerStore.times.length === 0) {
      return true
    }
    if (this.props.TimerStore.times.length !== this.props.LevelStore.levels.length) {
      return true
    }
    return false
  }
}

export default inject('TimerStore', 'LevelStore')(observer(EndGame))
