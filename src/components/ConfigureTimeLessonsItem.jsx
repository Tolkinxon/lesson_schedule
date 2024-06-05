import pen from './../assets/pen.svg'

const ConfigureTimeLessonsItem = ({ item, idx, setIsOpenEditTimeSection, setFindId }) => {

    return ( 
        <li className='configure__item'>
            <p className='configure__item-number'>{ idx }</p>

            <span className='configure__item-line'></span>

            <p className='configure__item-time'>
                { item }
            </p>

            <img className='configure__item-pen' src={pen} alt="there is a pen for edit time lesson" onClick={() => {setIsOpenEditTimeSection(prev => prev = !prev); setFindId(idx)}}/>
        </li>
     );
}
 
export default ConfigureTimeLessonsItem;