import React,{useState} from 'react'
import './Feedback.css'
import { Rate_no } from '../../assets/assets';
import FeedbackDisplay from '../FeedbackDisplay/FeedbackDisplay';
import { getLocalStorageRating,setLocalStorageRating } from './LocalStorage/LocalStorage';

const Feedback = () => {

     const[rateStore,setRateStore] = useState(0);
     const[inputValue,setInputValue] = useState("");
     const[storeTotal,setStoreTotal] = useState([]);
     const[task,setTask] = useState(()=>getLocalStorageRating());

     const handleInputChange= (value)=>{
        setInputValue(value);
     }

     const handleReviewSubmit = ()=>{
        if(!inputValue) return;

        const newTask = {id:rateStore,
                         desc:inputValue};

        setTask((t)=> [...t,newTask]);
        console.log(rateStore)
        setStoreTotal((s)=>[...s,rateStore]);
        console.log(storeTotal);
        setInputValue("")
        setRateStore(0);
        // setTask((t)=> console.log(t));
     }

     const handleDeleteRating =(item)=>{
      
      const updatedTask = task.filter((curTask)=> curTask.desc!== item.desc )
      setTask(updatedTask);
      // const updateAverage = task.filter((curAvg)=> curAvg.)
     }

     //handle local storage
     setLocalStorageRating(task);

  return (
    <div className='feed-ask'>
        <h1>Hey you can rate our services here</h1>
            <div className='rating-no'>
            {Rate_no.map((rating,index)=>{
                return(
                    <div key={index} className={`rating-index ${rateStore===rating.id?"active":""}`} onClick={()=>setRateStore(rating.id)}>
                      <p>{rating.id}</p>
                    </div>  
                )
            })}
            </div>

            <div className="review">
            <input type="text" className='rating-comment' autoComplete='off' value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}
                placeholder='Write a Review'
            />
            <button className='submit' onClick={handleReviewSubmit}>Submit</button>
            {/* <p>Average Rating is {task.map((rate,index)=>{
              const average = rate.id
              return(
                <>
                  
                </>
              )
            }
            )}  </p> */}
            </div>

            <div className="feedback-display-container">
            {task.map((item,index)=>{
                return(
                    <div key={index} className='display-feed'>
                            <p>{item.id}-{item.desc}</p>
                          <div className="display-items">
                            <button>Edit</button>
                            <button onClick={()=>handleDeleteRating(item)}>Delete</button>
                        </div>
                    </div>
                )
            })}
            </div>

    </div>
  )
}

export default Feedback

