import ConfigureTimeLessonsItem from './ConfigureTimeLessonsItem';
import { useEffect, useState } from 'react';
import { useHttp }  from '../hooks/useHttp';


const ConfigureTimeLessons = () => {

    const [isOpenEditTimeSection, setIsOpenEditTimeSection] = useState(false)

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

                <section className='editing-time' style={{display: isOpenEditTimeSection ? 'block':'none'}}>
                    <div className='container editing-time__container'>
                        <div className='editing-time__line'></div>

                        <p className='editing-time__text' onClick={() => setIsOpenEditTimeSection(prev => prev = !prev)}> Select </p>

                        <div className='editing-time__wrapper'>
                            <ul className='editing-time__start-list'>

                            </ul>

                            <ul className='editing-time__end-list'>

                            </ul>
                        </div>
                    </div>
                </section>
            </section>

       
        </>
     );
}
 
export default ConfigureTimeLessons;