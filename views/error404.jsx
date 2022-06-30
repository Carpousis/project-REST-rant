const React = require('react')
const Def = require('./default')

const error404 = () => {
        return (
          <Def>
              <main>
                  <h1>404: PAGE NOT FOUND</h1>
                  <p>Oops, sorry, we can't find this page!</p>
                  <div>
                    <img src="/images/oops.jpg" alt="Oops" width={400}height={500} />
                    <div>
                        Photo by <a href="AURTHOR_LINK">Sammy</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
              </main>
          </Def>
        )
}

module.exports = error404

