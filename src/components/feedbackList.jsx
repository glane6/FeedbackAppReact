import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, animatePresence, AnimatePresence} from 'framer-motion'

function feedbackList({ feedback, handleDelete} ) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div key={item.id} intial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}

feedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default feedbackList