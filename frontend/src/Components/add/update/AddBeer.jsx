import { useState } from 'react'
import Card from '../../../Shared/Card'
import RatingSelect from '../RatingSelect'

function AddPost({ onAdd }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [breweryRating, setBreweryRating] = useState()

    const onSubmit = (e) => {
      e.preventDefault() 
      
      if(!title) {
        alert('Please add a brewery')
        return
      }else if(!body){
        alert('Please add a review')
        return
      }else if(!title && !body) {
        alert('please add a Brewrey and Review')
        return
      }

      onAdd({ title, body, breweryRating})

      setBreweryRating()
      setBody('')
      setTitle('')
    }

  return (
    <Card>
    <form onSubmit={onSubmit}>
      <h2>How would rate our Service?</h2>
      <RatingSelect select={setBreweryRating} selected={breweryRating} />
        <div className='form-control'>
            <label>Add Beer</label>
            <input type="text" 
            placeholder='Add Beer'
            value={title}
            />
            </div>
            <div className='form-control'>
            <label>Review: </label>
            <textarea 
            name="body" 
            value={body}
            cols="30" 
            rows="10" />
        </div>

        <input type='submit' value='Save Beer'/>
    </form>
    </Card>
  )
}

export default AddPost