
import React, { Component } from 'react';

const CityId = props => (

  <section className="flex">
    {props.data.map((city, n) => <p key={n}>{city.name}<span>{city.id}</span></p>)}
  </section>
)

const CityRegion = props => (

  <section className="flex regions">
    {props.data.map((city, n) => <p key={n}>{city.name}<span>{city.region}</span></p>)}
  </section>
)

const CityPop = ({ data: spain }) => (

  <section className="flex pops">
    {spain.map((city, n) => <p key={n}>{city.name}<span>{city.popl}</span></p>)}
  </section>

)

const CityTemp = ({ data: spain }) => (

  <section className="flex">
    {spain.map((city, n) => <p key={n}>{city.name}<span>{city.temp}</span></p>)}
  </section>

)

// ===================================================================

class DrawTemps extends Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {

    fetch("spain-2017.json")
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  render() {
    return <CityTemp data={this.state.data} />
  }
}


export { DrawTemps }
