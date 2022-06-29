const React = require('react')
const Def = require('./default')

const home = () => {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <a>
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home