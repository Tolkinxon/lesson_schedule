import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { dataAdding, dataEditing, setFindOddOrEven, setFindTime, setFindId } from '../redux/actions';
import { v4 } from 'uuid'
import { useHttp }  from '../hooks/useHttp';


import { useNavigate } from 'react-router-dom';

const AddSchedule = () => {

    const findTime = useSelector(state => state.findTime)
    const findDay = useSelector(state => state.findDay)
    const findOddOrEven = useSelector(state => state.findOddOrEven)
    const findId= useSelector(state => state.findId)
    const staticData = useSelector(state => state.staticData)
    const timeLessonObj = useSelector(state => state.timeLessonObj)

    const { request } = useHttp()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [subjectName, setSubjectName] = useState('')
    const [subjectType, setSubjectType] = useState('')
    const [teacher, setTeacher] = useState('')
    const [timeLesson, setTimeLesson] = useState('')
    const [numberRoom, setNumberRoom] = useState('')
    const [oddOrEven, setOddOrEven] = useState(findOddOrEven)
    const [isEmpty, setIsEmpty] = useState(false)


    //setting datas in inputs from array
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

    // edit function for edit staticData 
    const editData = () => {
        const { id, timeLesson}  = findingItem
        let newData = { id, subjectName, subjectType, teacher, numberRoom, oddOrEven, timeLesson }

        if(isEmpty){
            newData = null
            request(`http://localhost:3001/schedule/${id}`, 'DELETE')
        }
        dispatch(dataEditing(newData, findingIdx))
        clearInputs()
    }
    

    // this codes for disable inputs by clicking isEmpty in label
    useEffect(()=>{
        document.querySelectorAll('.inputs__input').forEach(item => item.disabled = isEmpty)
        document.querySelectorAll('.weekly-lessons-type').forEach(item => item.disabled = isEmpty)
    },[isEmpty])


    // this codes for disable radio btns by clicking add new odd or even
    useEffect(()=>{
        if(findOddOrEven){
            document.querySelectorAll('.weekly-lessons-type').forEach(item => item.disabled = true)
        }
    },[findOddOrEven])



    //creating new item function
    const generateData = () => {

        let newData = { id: v4(), subjectName, subjectType, teacher, numberRoom, oddOrEven, timeLesson: timeLessonObj[`${findTime + 1}`]}
        if(!isEmpty){
            dispatch(dataAdding(newData))
            
        }
        clearInputs()
    }


    // here determinate which function will work
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


    // clearing all inputs value and states
    function clearInputs () {
        setIsEmpty(false)
        setOddOrEven('')
        setNumberRoom('')
        setTimeLesson('')
        setTeacher('')
        setSubjectName('')
        setSubjectType('')
        dispatch(setFindTime(-1))
        dispatch(setFindOddOrEven(''))
        dispatch(setFindId(''))
    }

    const customValidity = (text) => {
        return text
    }



    return ( 
       <>
            <header className="add-schedule-header">
              <div className="container add-schedule-header__container">
                    <h1 className="add-schedule-header__heading">
                        { findDay=="Jum"?'Juma,':findDay == "Sha"?"Shanba,":findDay+'shanba,'  }
                    </h1>
                    <h2 className="add-schedule-header__heading">
                       { findTime + 1 + " - para" }
                    </h2>
              </div>
            </header>

            <section className="radio-btns">
                <div className="container radio-btns__container">
                    <label className="radio-btns__label"  htmlFor="first">
                        <input className="weekly-lessons-type radio-btns__input visually-hidden" type="radio" id="first" name='subject-type' checked={oddOrEven == ''} value='' onChange={(e) => setOddOrEven(e.target.value)} />
                       
                        <div className="radio-btns__custom"></div>
                        
                        Har hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="second">
                        <input className="weekly-lessons-type radio-btns__input visually-hidden"  type="radio" id="second" name='subject-type' value='odd' checked={oddOrEven == 'odd'} onChange={(e) => setOddOrEven(e.target.value)}/>
                       
                        <div className="radio-btns__custom"></div>
                       
                        Toq hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="third">
                        <input className="weekly-lessons-type radio-btns__input visually-hidden" type="radio" id="third" name='subject-type' value='even' checked={oddOrEven == 'even'} onChange={(e) => setOddOrEven(e.target.value)}/>
                      
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
                    <label className="inputs__label" >
                        Fan nomi*
                        <input className="inputs__input" type="text"  value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required />
                    </label>

                    <label className="inputs__label">
                        <span>Dars turi <span className="inputs__label-extra">(ma'ruza, amaliyot, ...)</span></span>
                        <input className="inputs__input" type="text" value={subjectType} onChange={(e) => setSubjectType(e.target.value)} required/>
                    </label>

                    <label className="inputs__label">
                        O'qituvchi
                        <input className="inputs__input" type="text" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
                    </label>

                    <label className="inputs__label">
                        Xona
                        <input className="inputs__input" type="text" value={numberRoom} onChange={(e) => setNumberRoom(e.target.value)}/>
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



