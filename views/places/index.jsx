const React = require('react')
const Def = require('../default')

const index = (data) => {
    let placesFormatted = data.places.map((place, index) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${index}`}>
              </a>
              {place.name}
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} width={500} height={500}/>
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
        return (
        <Def>
            <main>
                <h1>Places to rant or rave about</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
      )
    }

module.exports = index