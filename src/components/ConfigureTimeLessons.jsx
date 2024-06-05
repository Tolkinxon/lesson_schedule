import ConfigureTimeLessonsItem from './ConfigureTimeLessonsItem';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { timeLessonFetchData } from '../redux/actions';



const ConfigureTimeLessons = () => {

    const timeLessonObj = useSelector(state => state.timeLessonObj)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isOpenEditTimeSection, setIsOpenEditTimeSection] = useState(false)
    const [findtId, setFindId] = useState(null)
    const [startHour, setStartHour] = useState('00')
    const [startMinute, setStartMinute] = useState('00')
    const [endMinute, setEndMinute] = useState('00')
    const [endHour, setEndHour] = useState('00')


    const [timeLessonsList, setTimeLessonsList] = useState([])

    useEffect(() => {
       

            document.querySelectorAll('.editing-time__start-list-for-hour')[0].scrollTo({top: 35})
            document.querySelectorAll('.editing-time__start-list-for-hour')[1].scrollTo({top: 35})
            document.querySelectorAll('.editing-time__start-list-for-minute')[0].scrollTo({top: 35})
            document.querySelectorAll('.editing-time__start-list-for-minute')[1].scrollTo({top: 35})
    }, [])


    let elements = []
    for(let i in timeLessonObj){
        elements.push(<ConfigureTimeLessonsItem item={ timeLessonObj[i] } idx={ i } setIsOpenEditTimeSection={setIsOpenEditTimeSection} setFindId={setFindId} key={ i }/>)
    }

  
    function generatorTimes(limitTime) {
        const generatedTimes = []
        const extraTimes = []
        for(let i = 0; i < limitTime; i++){
        
            const time = (`${i}`.length == 2 ? `${i}`:`0${i}`)
            generatedTimes.push(<li className='editing-time__item' key={ v4() } >{ time }</li>)

            if(i < 3){
                extraTimes.push(<li className='editing-time__item' key={ v4() } >{ time }</li>)
            }
        }
        return [...generatedTimes, ...extraTimes]
    }


    let prevScrollTop = 0
    const changingByScrolling = (e, func) => {
        const distanceUntillTop = e.target.scrollTop
        const content = e.target.children[Math.floor(distanceUntillTop / 37)].textContent
        func(content)


        if(Math.floor(distanceUntillTop) === e.target.scrollHeight - 96) {
            e.target.scrollTop = 2
        }
    
        else if(prevScrollTop > distanceUntillTop && distanceUntillTop === 0) {
            e.target.scrollTop = e.target.scrollHeight - 97
        }

        prevScrollTop = distanceUntillTop
    }


    const savingTime = () => {
       setIsOpenEditTimeSection(prev => prev = !prev)

       const startTime = document.querySelector('#startTime').textContent
       const endTime = document.querySelector('#endTime').textContent

       dispatch(timeLessonFetchData({...timeLessonObj, [`${findtId}`]: `${startTime} - ${ endTime }`}))
    }


    return ( 
        <>
            <section className="configure">
                <div className="container configure__container">
                    <h1 className="configure__heading">
                        Sozlamalar
                    </h1>

                    <p className="configure__text">
                        Paralar vaqtlari
                    </p>

                    <ul className="configure__list">
                        { elements }
                    </ul>

                    <button onClick={() => navigate('/')}>back</button>
                </div>

                <section className='editing-time' style={{display: isOpenEditTimeSection ? 'block':'none'}}>
                    <div className='container editing-time__container'>
                        <div className='editing-time__line'></div>

                        <p className='editing-time__text' onClick={() => savingTime()}> Select </p>

                        <div className='editing-time__wrapper'>
                            <div>
                                <p className='editing-time__selected-for-start' id='startTime'>{ startHour }:{ startMinute }</p>
                                <div className='editing-time__start-list-wrapper'>
                                    <ul className='editing-time__start-list-for-hour' onScroll={e => changingByScrolling(e, setStartHour)}>
                                        { generatorTimes(24) }
                                    </ul>
                                    <ul className='editing-time__start-list-for-minute' onScroll={e => changingByScrolling(e, setStartMinute)} >
                                        { generatorTimes(60) }
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className='editing-time__selected-for-start' id='endTime'>{ endHour }:{ endMinute }</p>
                                <div className='editing-time__start-list-wrapper'>
                                    <ul className='editing-time__start-list-for-hour' onScroll={e => changingByScrolling(e, setEndHour)}>
                                        { generatorTimes(24) }
                                    </ul>
                                    <ul className='editing-time__start-list-for-minute' onScroll={e => changingByScrolling(e, setEndMinute)} >
                                        { generatorTimes(60) }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

       
        </>
     );
}
 
export default ConfigureTimeLessons;