import ConfigureTimeLessonsItem from './ConfigureTimeLessonsItem';
import { useEffect, useState } from 'react';
import { useHttp }  from '../hooks/useHttp';
import { retry } from '@reduxjs/toolkit/query';


const ConfigureTimeLessons = () => {

    const [isOpenEditTimeSection, setIsOpenEditTimeSection] = useState(false)
    const [changeIndex, setChangeIndex] = useState(0)

    const { request } = useHttp()

    const [timeLessonsList, setTimeLessonsList] = useState([])

    useEffect(() => {
        request('http://localhost:3001/lessonsTime')
            .then(data => {
                const newList = []
                for(let i in data){
                    newList.push(data[i])
                }
                setTimeLessonsList(newList)
            })
            .catch((e) => console.log(e))
    }, [])


    const elements = timeLessonsList.map((item, idx) => {
       return <ConfigureTimeLessonsItem item={ item } idx={ idx } setIsOpenEditTimeSection={setIsOpenEditTimeSection}/>
    })

  
    function generatorTimes(limitTime) {
        const generatedTimes = []
        for(let i = 0; i < limitTime; i++){
            const time = (`${i}`.length == 2 ? `${i}`:`0${i}`)
            generatedTimes.push(<li className='editing-time__item' key={i} >{ time }</li>)
        }
        return generatedTimes
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
                </div>

                <section className='editing-time' style={{display: isOpenEditTimeSection ? '':''}}>
                    <div className='container editing-time__container'>
                        <div className='editing-time__line'></div>

                        <p className='editing-time__text' onClick={() => setIsOpenEditTimeSection(prev => prev = !prev)}> Select </p>

                        <div className='editing-time__wrapper' onClick={() => setChangeIndex(prev => prev -= 1)}>
                            <div>
                                <p className='editing-time__selected-for-start'>00:00</p>
                                <div className='editing-time__start-list-wrapper'>
                                    <ul className='editing-time__start-list-for-hour' >
                                        { generatorTimes(24) }
                                    </ul>
                                    <ul className='editing-time__start-list-for-minute' >
                                        { generatorTimes(60) }
                                    </ul>
                                </div>
                            </div>
                       

                            {/* <ul className='editing-time__end-list'>
                            { generatorTimes(60) }
                            </ul> */}
                        </div>
                    </div>
                </section>
            </section>

       
        </>
     );
}
 
export default ConfigureTimeLessons;