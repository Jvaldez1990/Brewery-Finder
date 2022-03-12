import AddBrewery from "./AddBrewery"
import Card from '../../../Shared/Card'

function BreweryPage() {
  return (
     <div class="container">
            <div class="row">
              <div class="col-5">
                <Card>
                  <AddBrewery />
                </Card>
              </div>
            </div>
      </div>
  )
}

export default BreweryPage