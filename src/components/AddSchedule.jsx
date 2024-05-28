import { useSelector } from 'react-redux'
import { useState } from 'react';
import { v4 } from 'uuid'

const AddSchedule = () => {
    const [subjectName, setSubjectName] = useState('')
    const [subjectType, setSubjectType] = useState('')
    const [teacher, setTeacher] = useState('')
    const [timeLesson, setTimeLesson] = useState('')
    const [numberRoom, setNumberRoom] = useState('')
    const [oddOrEven, setOddOrEven] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)


    const generateData = () => {
        const newData = { id: v4(), subjectName, subjectType, teacher, numberRoom, oddOrEven }

        console.log(newData);
    }
   

    // const staticData = useSelector(state => state.staticData)


    return ( 
       <>
            <header className="add-schedule-header">
              <div className="container add-schedule-header__container">
                    <h1 className="add-schedule-header__heading">
                        Payshanba,
                    </h1>
                    <h2 className="add-schedule-header__heading">
                        4-para
                    </h2>
              </div>
            </header>

            <section className="radio-btns">
                <div className="container radio-btns__container">
                    <label className="radio-btns__label"  htmlFor="first" >
                        <input className="radio-btns__input visually-hidden" type="radio" id="first" name='subject-type' checked={oddOrEven == ''} value='' onChange={(e) => setOddOrEven(e.target.value)}/>
                       
                        <div className="radio-btns__custom"></div>
                        
                        Har hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="second">
                        <input className="radio-btns__input visually-hidden"  type="radio" id="second" name='subject-type' value='odd' checked={oddOrEven == 'odd'} onChange={(e) => setOddOrEven(e.target.value)}/>
                       
                        <div className="radio-btns__custom"></div>
                       
                        Toq hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="third">
                        <input className="radio-btns__input visually-hidden" type="radio" id="third" name='subject-type' value='even' checked={oddOrEven == 'even'} onChange={(e) => setOddOrEven(e.target.value)}/>
                      
                        <div className="radio-btns__custom"></div>

                        Juft hafta
                    </label>
                </div>

                <div className="container checkbox-container">
                    <label className="radio-btns__label " htmlFor="empty">
                        <input className="radio-btns__input visually-hidden"  type="checkbox" id="empty"  checked={isEmpty} onChange={() => setIsEmpty(!isEmpty)}/>

                        <div className="radio-btns__custom"></div>

                        Bo'sh qoldirish
                    </label>
                </div>
            </section>

            <section className="inputs">
                <div className="container inputs__container" >
                    <label className="inputs__label">
                        Fan nomi*
                        <input className="inputs__input" type="text"  value={subjectName} onChange={(e) => setSubjectName(e.target.value)}/>
                    </label>

                    <label className="inputs__label">
                        <span>Dars turi <span className="inputs__label-extra">(ma'ruza, amaliyot, ...)</span></span>
                        <input className="inputs__input" type="text" value={subjectType} onChange={(e) => setSubjectType(e.target.value)}/>
                    </label>

                    <label className="inputs__label">
                        O'qituvchi
                        <input className="inputs__input" type="text" value={teacher} onChange={(e) => setTeacher(e.target.value)}/>
                    </label>

                    <label className="inputs__label">
                        Xona
                        <input className="inputs__input" type="text" value={numberRoom} onChange={(e) => setNumberRoom(e.target.value)}/>
                    </label>


                    <p className="inputs__next-lesson">keyingi dars 28-dekabr</p>
                </div>
            </section>

            <footer className="container saving">
                <button className="saving__button" onClick={generateData}>
                    Saqlash
                </button>
            </footer>
      </>

     );
}
 
export default AddSchedule;