const React = require('react')
const Def = require ('../default.jsx')

const edit_form = (data) => {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
              <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={data.place.name}
                    required />
              </div>
              <div>
                <label htmlFor="pic">Place Picture</label>
                <input type="url" id="pic" name="pic" />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input id="city" name="city" />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input id="state" name="state" maxLength={2}/>
              </div>
              <div>
                <label htmlFor="cuisines">Cuisines</label>
                <input id="cuisines" name="cuisines" required />
              </div>
              <input type="submit" value="Add Place" />
            </form>
            </main>
        </Def>
    )
}

module.exports = edit_form