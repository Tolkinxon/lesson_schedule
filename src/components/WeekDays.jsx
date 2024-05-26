const WeekDays = ({ date, day }) => {



    return ( 
        <li className="calendar__item">
            <h3>{date}</h3>
            <p>{ day }</p>
        </li>
     );
    
}

 
export default WeekDays;