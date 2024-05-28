import { useContext, useReducer } from "react";
import { reducer } from './../reducer/reducer'
import { MyContext } from "../App"; 


const AddSchedule = () => {



    // const [newAdd, dispatch] = useReducer(reducer, {add: add})

    // console.log(data);






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
                    <label className="radio-btns__label"  htmlFor="first">
                        <input className="radio-btns__input visually-hidden" type="radio" id="first" name='subject-type' />
                       
                        <div className="radio-btns__custom"></div>
                        
                        Har hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="second">
                        <input className="radio-btns__input visually-hidden"  type="radio" id="second" name='subject-type'/>
                       
                        <div className="radio-btns__custom"></div>
                       
                        Toq hafta
                    </label>

                    <label className="radio-btns__label" htmlFor="third">
                        <input className="radio-btns__input visually-hidden" type="radio" id="third" name='subject-type'/>
                      
                        <div className="radio-btns__custom"></div>

                        Juft hafta
                    </label>
                </div>

                <div className="container checkbox-container">
                    <label className="radio-btns__label " htmlFor="empty">
                        <input className="radio-btns__input visually-hidden"  type="checkbox" id="empty"/>

                        <div className="radio-btns__custom"></div>

                        Bo'sh qoldirish
                    </label>
                </div>
            </section>

            <section className="inputs">
                <div className="container inputs__container">
                    <label className="inputs__label">
                        Fan nomi*
                        <input className="inputs__input" type="text" />
                    </label>

                    <label className="inputs__label">
                        <span>Dars turi <span className="inputs__label-extra">(ma'ruza, amaliyot, ...)</span></span>
                        <input className="inputs__input" type="text" />
                    </label>

                    <label className="inputs__label">
                        O'qituvchi
                        <input className="inputs__input" type="text" />
                    </label>

                    <label className="inputs__label">
                        Xona
                        <input className="inputs__input" type="text" />
                    </label>


                    <p className="inputs__next-lesson">keyingi dars 28-dekabr</p>
                </div>
            </section>

            <footer className="container saving">
                <button className="saving__button">
                    Saqlash
                </button>
            </footer>

      </>

     );
}
 
export default AddSchedule;