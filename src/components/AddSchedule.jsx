const AddSchedule = () => {
    return ( 
       <>
            <header className="add-schedule-header">
              <div className="container add-schedule-header__container">
                    <h1 className="add-schedule-header__header">
                        Payshanba,
                        <br />
                        4-para
                    </h1>
              </div>
            </header>

            <section className="radio-btns">
                <div className="container radio-btns__container">
                    <label className="radio-btns__label"  htmlFor="first">
                        <input className="radio-btns__input visually-hidden" type="radio" id="first" name='subject-type'/>
                       
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
            </section>
      </>

     );
}
 
export default AddSchedule;