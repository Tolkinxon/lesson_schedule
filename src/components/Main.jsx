import headerImg from './../assets/header-img.png'
import headerClock from './../assets/header-clock.svg'
import calendarNext from './../assets/calendar-next.svg'
import addSchedule from './../assets/add_schedule.svg'
import WeekDays from './WeekDays'
import Schedule__item from './Schedule__item'
import { useGenerateWeekDates } from '../hooks/useGenerateWeekDates';
import { useHttp }  from '../hooks/useHttp';
import { useState, useEffect } from 'react'


const Main = () => {

    const { request } = useHttp()

    const [changibleDay, setChangibleDay] = useState(new Date().getDate())
    const [changibleMoth, setChangibleMonth] = useState(new Date().getMonth() + 1)
    const [changibleYear, setChangibleYear] = useState(new Date().getFullYear())
    const [data, setData] = useState([])

    const { slisedDates, slisedDays } = useGenerateWeekDates(changibleYear, changibleMoth, changibleDay)


    useEffect(() => {
        request('http://localhost:3001/schedule')
            .then(data => {
                setData(data)

                data.sort((a, b) => a.timeLesson.slice(0, 2) - b.timeLesson.slice(0, 2))

                data.forEach((item, idx) => {
                    if(data[idx].timeLesson == data[idx + 1].timeLesson){
                        const newArr = [item, data[idx + 1]]
                        data.splice(idx, 1)
                        data.splice(idx, 1)
                        data.splice(idx, 0, newArr)
                    }
                })

                data.forEach((item, idx) => {
                    if(item.oddOrEven != '' && item.oddOrEven !== undefined ){
                        const findOdOrEven = item.oddOrEven == 'odd' ? 'even': 'odd'
                        const newArr = [item, findOdOrEven]
                        data.splice(idx, 1)
                        data.splice(idx, 0, newArr)
                    }
                })


            })
            .catch((e) => console.log(e))
    }, [])



    const next = () => {
        setChangibleDay(slisedDates[4])
        if(slisedDates[4] === 1){
                setChangibleMonth(prev => prev += 1)
        }
    }
    

    const calendarElements = slisedDates.map((item, idx) => {
       return <WeekDays key={ item } date={ item } day={ slisedDays[idx] } idx={ idx }/>
    })


    const scheduleElements = data.map((item, idx) => {
        return <Schedule__item key={idx} item={ item }/>
    })

    console.log(data);

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
                    { calendarElements }
                </ul>

                <img className='calendar__next-svg' src={calendarNext} alt="next day svg" 
                onClick={() => next()} />
            </div>
        </section>

        <section className='schedule'>
            <div className="container schedule__container">
                <h2 className='schedule__heading'>Bugungi jadval</h2>

                <ul className='schedule__list'>
                    { scheduleElements }
                </ul>

                <div className="schedule__add-new-schedule">
                    <img className="schedule__add-new-schedule-img" src={ addSchedule } alt="add new schedule icon" />

                    <p className="schedule__add-new-schedule-text">Jadval kiritish</p>
                </div>
            </div>
        </section>
     
     </>
     );
}
 
export default Main;