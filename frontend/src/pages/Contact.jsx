import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [input, setInput] =  useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Name:${input}, Email: ${email}, Password:${pwd}`)
  }

  return (
    <div className="dflex">
    <h1>Sign in</h1>
    <form onSubmit={handleSubmit}>
      
      {/* person */}
      <div className="dflex drow finish">
        <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px" viewBox="0 -960 960 960" 
          width="24px" fill="#000000">
          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
        </svg>
        <input type="text" name="input" onChange={(e)=> setInput(e.target.value)} placeholder="Name"/>
      </div>

      {/* mail */}
      <div className="dflex drow finish">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg>
        <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
      </div>

      {/* password */}
      <div className="dflex drow finish">
        <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
        </svg>
        <div className="dflex drow pass">
          <input type="password" name="password" onChange={(e)=> setPwd(e.target.value)} placeholder="********" />
          <input type="checkbox" name="viewpwd"  />
        </div>
      </div>

      {/* sms */}
      <div className="dflex drow finish">
        <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px" viewBox="0 -960 960 960" 
          width="24px" fill="#000000">
            <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
        </svg>
        <textarea name="message" placeholder='Message'></textarea>
      </div>

      <div className="dflex drow">
        <div></div>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
    </div>
  )
}
export default Contact;