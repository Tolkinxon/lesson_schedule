import ConfigureTimeLessonsItem from './ConfigureTimeLessonsItem';
import { useEffect, useState } from 'react';
import { useHttp }  from '../hooks/useHttp';


const ConfigureTimeLessons = () => {

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
       return <ConfigureTimeLessonsItem item={ item } idx={ idx } />
    })

    

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
            </section>

            <section className='editing-time'>
                <div className='container editing-time__contaner'>
                    <div className='editing-time__line'></div>

                    <p className='editing-time__text'> Select </p>

                    <div className='editing-time__wrapper'>
                        <ul className='editing-time__start-list'>

                        </ul>

                        <ul className='editing-time__end-list'>

                        </ul>
                    </div>

                </div>

            </section>
        </>
     );
}
 
export default ConfigureTimeLessons;