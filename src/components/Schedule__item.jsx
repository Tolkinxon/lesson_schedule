import addSchedule from './../assets/add_schedule.svg'
import { setFindTime, setFindOddOrEven, setFindId } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const OddOrEventElements = ({  item, idx  }) => {

    const dispatch = useDispatch()

    const finding = (idx, oddOrEven) => {
        dispatch(setFindTime(idx))
        dispatch(setFindOddOrEven(oddOrEven))
    }

    let isTwoObj = typeof item[1] === 'object'

  
   const element = item.map((element, index) => {

            const {id, subjectName, teacher, numberRoom, subjectType, oddOrEven, color } = element

            if(subjectName == undefined){
                return (
                 <Link to="/add-schedule" style={{textDecoration: 'none'}}>
                       <div className={`schedule__add-new-schedule half-schedule ${element}`}  key={index} onClick={() => finding(idx, element)}>
                            <img className="schedule__add-new-schedule-img" src={ addSchedule } alt="add new schedule icon" />
            
                            <p className="schedule__add-new-schedule-text">
                                { element == 'odd' ?"Toq hafta":'Juft hafta'}
                            </p>
                       </div>
                 </Link>
                )
            }

      
            return (
                    <Link to="/add-schedule" style={{textDecoration: 'none'}}>
                        <div className={`schedule__item-body odd-or-even ${oddOrEven}`}  style={{backgroundColor: color}} key={index} onClick={() => {dispatch(setFindId(id)); dispatch(setFindOddOrEven(isTwoObj)); dispatch(setFindTime(idx))}}>
                            <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>
            
                            <p className="schedule__item-teacher">{ teacher }</p>
            
                            <p className="schedule__item-room">
                                { `${ subjectType } ${ numberRoom }-xona` }
                            </p>
                        </div>
                    </Link>
            )
    });

    return element
}

const OnlyObjects = ({ item, idx }) => {

    const dispatch = useDispatch()

    const {id, subjectName, teacher, numberRoom, subjectType, color } = item


    return ( 
     
            <Link to="/add-schedule" style={{textDecoration: 'none'}}>
                <div className="schedule__item-body" style={{backgroundColor: color}} key={idx} onClick={() => {dispatch(setFindId(id)); dispatch(setFindTime(idx))}}>
                    <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>

                    <p className="schedule__item-teacher">{ teacher }</p>

                    <p className="schedule__item-room">
                        { `${ subjectType } ${ numberRoom }-xona` }
                    </p>
                </div>
            </Link>
      
    );
}

const Schedule__item = ({ item, idx }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    if(item.length == 2){
        const { timeLesson } = item[0]
        return(
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>
                <div className="schedule__item-body-wrappper">
                    <OddOrEventElements item={ item } idx={ idx }/>
                </div>
            </li>
        ) 
    }
    else {

        const { timeLesson } = item

        return (
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>
                <div className="schedule__item-body-wrappper " style={{height: item.id ? '108px': '0px'}}>
                  { item.id ? <OnlyObjects item={ item } idx={ idx } /> : 
                  <img className="schedule__item-add-img" onClick={() => {dispatch(setFindTime(idx)); navigate('/add-schedule')}}  src={addSchedule} />}  
                </div>
            </li>
        )
    }
}
 
export default Schedule__item;