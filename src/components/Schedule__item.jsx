import addSchedule from './../assets/add_schedule.svg'
import { setFindTime, setFindOddOrEven, setFindId } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OddOrEventElements = ({  item, idx  }) => {

    const dispatch = useDispatch()


    const finding = (idx, oddOrEven) => {
        dispatch(setFindTime(idx))
        dispatch(setFindOddOrEven(oddOrEven))
    }


   const element = item.map((element, index) => {

            const {id, subjectName, teacher, numberRoom, subjectType, oddOrEven } = element

            if(subjectName == undefined){
                return (
                 <Link to="/add-schedule">
                       <div className={`schedule__add-new-schedule half-schedule ${element}`}  key={index} onClick={() => finding(idx, element)}>
                            <img className="schedule__add-new-schedule-img" src={ addSchedule } alt="add new schedule icon" />
            
                            <p className="schedule__add-new-schedule-text">
                                { element == 'odd' ?"Toq hafta":'Juft hafta'}
                            </p>
                       </div>
                 </Link>
                )
            }

            let color = ''
            return (
                <Link to="/add-schedule">
                    <div className={`schedule__item-body odd-or-even ${oddOrEven}`}  style={{backgroundColor: color}} key={index} onClick={() => dispatch(setFindId(id))}>
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


    const {id, subjectName, teacher, numberRoom, subjectType } = item

    let color = ''


    return ( 
        <Link to="/add-schedule">
            <div className="schedule__item-body" style={{backgroundColor: color}} key={idx} onClick={() => dispatch(setFindId(id))}>
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

    if(item.id == undefined){
        const { timeLesson } = item[0]
        return(
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>
                <div className="schedule__item-body-wrappper" >
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
                <div className="schedule__item-body-wrappper" >
                    <OnlyObjects item={ item } />
                </div>
            </li>
        )
    }
}
 
export default Schedule__item;