import headerImg from './../assets/header-img.png'
import headerClock from './../assets/header-clock.svg'
import calendarNext from './../assets/calendar-next.svg'
import WeekDays from './WeekDays'
import { useGenerateWeekDates } from '../hooks/useGenerateWeekDates';

const Main = () => {

    const { slisedDates, slisedDays } = useGenerateWeekDates()

    console.log(slisedDates, slisedDays);
    
    const elements = slisedDates.map((item, idx) => {
       return <WeekDays key={ item } date={ item } day={ slisedDays[idx] } idx={ idx }/>
    })
    


    return ( 
     <>
        <section className="header">
            <h1 className="visually-hidden">lesson schedule for facilitate find room and to save your time</h1>
            <div className="container header__container">
               <div className='header__wrapper'>
                    <img className='header__img' src={headerImg} alt="heder image for customer" width={58} height={58}/>

                    <h2 className="header__heading">
                        Xayrli kun, To'lqin
                    </h2>
               </div>

                <img className='header__clock' src={headerClock} alt="header clock icon for configure time" />
            </div>
        </section>

        <section className='calendar'>
            <div className="container calendar__container">
                 {/* <img className='calendar__prev-svg' src={calendarNext} alt="prev day svg" width={30} height={30}/> */}

                <ul className='calendar__list'>
                    { elements }
                </ul>

                <img className='calendar__next-svg' src={calendarNext} alt="next day svg"/>
            </div>
        </section>
     
     </>
     );
}
 
export default Main;