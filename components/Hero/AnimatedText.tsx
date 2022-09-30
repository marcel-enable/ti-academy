import React, { useEffect, useState } from 'react';

const FADE_INTERVAL_MS = 3000
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS *2

type FadeProp = { fade: 'fade-in' | 'fade-out' }


const AnimatedText = (props: {wordsToAnimate: string[], style:string}) => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [wordOrder, setWordOrder] = useState(0)
  const [word, setWord] = useState(props.wordsToAnimate[0])
  
  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % props.wordsToAnimate.length)
      
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])



  return (
    
    <div className={`${props.style} ${fadeProp.fade}`}>{props.wordsToAnimate[wordOrder]}</div>
    
  )
}

export default AnimatedText;