import { useDispatch } from "react-redux";
import { setFindDay } from "../redux/actions";

const WeekDays = ({ date, day, idx }) => {

    const dispatch = useDispatch()


let classOfCurrentDay = ''

    switch(day){
        case 0: day = 'Yak'; break;
        case 1: day = 'Du'; break;
        case 2: day = 'Se'; break;
        case 3: day = 'Chor'; break;
        case 4: day = 'Pay'; break;
        case 5: day = 'Jum'; break;
        case 6: day = 'Sha'; break;
    }

    if(idx === 4){
        classOfCurrentDay = 'calendar__current-item'
        dispatch(setFindDay(day))
    }



    return ( 
        <li className={`calendar__item ${classOfCurrentDay}`}>
            <h3 className="calendar__heading">{date}</h3>
            <p className="calendar__text">{ day }</p>
        </li>
     );
    
}

 
export default WeekDays;