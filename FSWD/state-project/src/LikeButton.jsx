import {useState} from 'react'

function LikeButton() {
    const[liked, SetLiked] = useState(false)

  return (
    <div>
   <button onClick={() => SetLiked(!liked)}>
    {liked ? "😊Liked" : "💗Like"} Text 
   </button>
   </div>
  )
}

export default LikeButton


