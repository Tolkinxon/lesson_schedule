import headerImg from './../assets/header-img.png'
import headerClock from './../assets/header-clock.svg'
import calendarNext from './../assets/calendar-next.svg'
import WeekDays from './WeekDays'
import { useGenerateWeekDates } from '../hooks/useGenerateWeekDates';
import { useState } from 'react'

const Main = () => {

    const [changibleDay, setChangibleDay] = useState(new Date().getDate())
    const [changibleMoth, setChangibleMonth] = useState(new Date().getMonth() + 1)
    const [changibleYear, setChangibleYear] = useState(new Date().getFullYear())

    const { slisedDates, slisedDays } = useGenerateWeekDates(changibleYear, changibleMoth, changibleDay)

    const next = () => {
        setChangibleDay(slisedDates[4])
        if(slisedDates[4] === 1){
                setChangibleMonth(prev => prev += 1)
        }
    }
    
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
                 {/* <img className='calendar__prev-svg' src={calendarNext} alt="prev day svg"/> */}

                <ul className='calendar__list'>
                    { elements }
                </ul>

                <img className='calendar__next-svg' src={calendarNext} alt="next day svg" 
                onClick={() => next()} />
            </div>
        </section>

        <section className='schedule'>
            <div className="container schedule__container">
                <h2 className='schedule__heading'>Bugungi jadval</h2>

                <ul className='schedule__list'>

                </ul>
            </div>
        </section>
     
     </>
     );
}
 
export default Main;