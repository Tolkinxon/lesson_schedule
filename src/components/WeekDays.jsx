const WeekDays = ({ date, day }) => {


    switch(day){
        case 0: day = 'Yak'; break;
        case 1: day = 'Du'; break;
        case 2: day = 'Se'; break;
        case 3: day = 'Chor'; break;
        case 4: day = 'Pay'; break;
        case 5: day = 'Jum'; break;
        case 6: day = 'Sha'; break;
    }



    return ( 
        <li className="calendar__item">
            <h3 className="calendar__heading">{date}</h3>
            <p className="calendar__text">{ day }</p>
        </li>
     );
    
}

 
export default WeekDays;