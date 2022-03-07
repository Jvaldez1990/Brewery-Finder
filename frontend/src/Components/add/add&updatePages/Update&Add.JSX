import AddPost from "../update/AddBeer"
import { useState } from 'react'

function UpdateAdd() {
    const [showAddBeer, setShowAddBeer] = useState(false)


  return (
    <div>
        <header>
            <h1></h1>
        </header>
        <Card>
            <AddPost />
        </Card>
    </div>
  )
}

export default UpdateAdd