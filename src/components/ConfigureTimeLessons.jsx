import pen from './../assets/pen.svg'


const ConfigureTimeLessons = () => {
    return ( 
        <section className="configure">
            <div className="container configure__container">
                <h1 className="configure__heading">
                    Sozlamalar
                </h1>

                <p className="configure__text">
                    Paralar vaqtlari
                </p>

                <ul className="configure__list">
                    <li className='configure__item'>
                        <p className='configure__item-number'>1</p>

                        <span className='configure__item-line'></span>

                        <p className='configure__item-time'>
                            08:30 - 09:50
                        </p>

                        <img className='configure__item-pen' src={pen} alt="there is a pen for edit time lesson" />
                    </li>
                </ul>
            </div>
        </section>
     );
}
 
export default ConfigureTimeLessons;