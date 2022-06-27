import {useState} from 'react';
import useZipLookUp from './useZipCode';

function ShippingAddress2(props) {
  const [zipcode, setZipcode] = useState('')
  const [city, state] = useZipLookUp(zipcode);

  const setZip = (e) => {
    e.preventDefault();
    setZipcode(e.target.zipcode.value)
  }

  return (
    <form onSubmit={setZip}>
      Zipcode: <input type='text' name='zipcode'/>
      <button type='submit'>Look up City/State</button><br/>

      City: {city}<br/>
      State: {state}<br/>
    </form>
  )
}

export default ShippingAddress2;