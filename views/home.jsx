const React = require('react')
const Def = require('./default')

const home = () => {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/fruit.drink.jpg" alt="Fruit Shake" width={600}height={500} />
                    <div>
                        Photo by <a href="AURTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a>
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home