import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { useHttp }  from '../hooks/useHttp';
import { dataAdding, dataEditing, setFindOddOrEven, setFindTime, setFindId } from '../redux/actions';
import { v4 } from 'uuid'
import { Link, useNavigate } from 'react-router-dom';

const AddSchedule = () => {

    const findTime = useSelector(state => state.findTime)
    const findOddOrEven = useSelector(state => state.findOddOrEven)
    const findId= useSelector(state => state.findId)
    const staticData = useSelector(state => state.staticData)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [subjectName, setSubjectName] = useState('')
    const [subjectType, setSubjectType] = useState('')
    const [teacher, setTeacher] = useState('')
    const [timeLesson, setTimeLesson] = useState('')
    const [timeLessonObj, setTimeLessonObj] = useState('')
    const [numberRoom, setNumberRoom] = useState('')
    const [oddOrEven, setOddOrEven] = useState(findOddOrEven)
    const [isEmpty, setIsEmpty] = useState(false)

    const { request } = useHttp()
    useEffect(() => {
        request('http://localhost:3001/lessonsTime')
            .then(data => {
                setTimeLessonObj(data)
            })
            .catch((e) => console.log(e))
    }, [])


    const findingItem = staticData.find(item => item.id == findId)
    const findingIdx = staticData.findIndex(item => item.id == findId)
    useEffect(() => {
        if (findingItem) {
            const { subjectName, teacher, numberRoom, subjectType, oddOrEven } = findingItem
            setSubjectName(subjectName)
            setTeacher(teacher)
            setNumberRoom(numberRoom)
            setSubjectType(subjectType)
            setOddOrEven(oddOrEven)
            setIsEmpty(false)
        }
    }, [findId])


    const editData = () => {
        const { id, timeLesson}  = findingItem
        const newData = { id, subjectName, subjectType, teacher, numberRoom, oddOrEven, timeLesson, isEmpty}
        dispatch(dataEditing(newData, findingIdx))
        clearInputs()
    }

    const generateData = () => {
        const newData = { id: v4(), subjectName, subjectType, teacher, numberRoom, oddOrEven, timeLesson: timeLessonObj[`${findTime + 1}`], isEmpty}
        dispatch(dataAdding(newData))
        clearInputs()
    }

    const runFunctions = (e) => {
        e.preventDefault();
        navigate('/')
        if(findId){
            editData()
        }
        else {
            generateData()
        }
    }

    function clearInputs () {
        setIsEmpty(false)
        setOddOrEven('')
        setNumberRoom('')
        setTimeLesson('')
        setTeacher('')
        setSubjectName('')
        setSubjectType('')
        setTimeLessonObj('')
        dispatch(setFindTime(-1))
        dispatch(setFindOddOrEven(''))
        dispatch(setFindId(''))
    }

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

        <form onSubmit={(e) => runFunctions(e)}>
            <section className="inputs">
                <div className="container inputs__container" >
                    <label className="inputs__label">
                        Fan nomi*
                        <input className="inputs__input" type="text"  value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required/>
                    </label>

                    <label className="inputs__label">
                        <span>Dars turi <span className="inputs__label-extra">(ma'ruza, amaliyot, ...)</span></span>
                        <input className="inputs__input" type="text" value={subjectType} onChange={(e) => setSubjectType(e.target.value)} required/>
                    </label>

                    <label className="inputs__label">
                        O'qituvchi
                        <input className="inputs__input" type="text" value={teacher} onChange={(e) => setTeacher(e.target.value)} required/>
                    </label>

                    <label className="inputs__label">
                        Xona
                        <input className="inputs__input" type="text" value={numberRoom} onChange={(e) => setNumberRoom(e.target.value)} required/>
                    </label>


                    <p className="inputs__next-lesson">keyingi dars 28-dekabr</p>
                </div>
            </section>

            <footer className="container saving">
                    <button  type='submit' className="saving__button" >
                        Saqlash
                    </button>
            </footer>
        </form>
      </>

     );
}
 
export default AddSchedule;