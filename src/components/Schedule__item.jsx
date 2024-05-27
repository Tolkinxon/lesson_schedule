import { useState } from "react";
import addSchedule from './../assets/add_schedule.svg'

const oddOrEventElements = ({ item }) => {

   const element = item.map((element, idx) => {

            const { subjectName, teacher, numberRoom, subjectType, oddOrEven } = element

            if(subjectName == undefined){
                return (
                    <div className="schedule__add-new-schedule half-schedule">
                        <img className="schedule__add-new-schedule-img" src={ addSchedule } alt="add new schedule icon" />
        
                        <p className="schedule__add-new-schedule-text">{ element == 'odd' ?"Toq hafta":'Juft hafta'}</p>
                     </div>
                )
            }

            let color = ''
            return (
                <div className={`schedule__item-body odd-or-even ${oddOrEven}`} style={{backgroundColor: color}}>
                    <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>
    
                    <p className="schedule__item-teacher">{ teacher }</p>
    
                    <p className="schedule__item-room">
                        { `${ subjectType } ${ numberRoom }-xona` }
                    </p>
                </div>
            )
    

        
        

   
  

    });

    return ( 
        <div className="schedule__item-body-wrappper">
            {element}
        </div>
    );
}

const onlyObjects = ({ item }) => {

    const { subjectName, teacher, numberRoom, subjectType } = item

    let color = ''
    // switch(idx) {
    //     case 0: color = '#DE496E'; break;
    //     case 1: color = '#8572FF'; break;
    //     case 2: color = '#2E97A7'; break;
    //     default: console.log('something went wrong');
    // }

    return ( 
            <div className="schedule__item-body" style={{backgroundColor: color}}>
                <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>

                <p className="schedule__item-teacher">{ teacher }</p>

                <p className="schedule__item-room">{ `${ subjectType } ${ numberRoom }-xona` }</p>
            </div>
    );
}
 


const Schedule__item = ({ item }) => {

    if(item.id == undefined){
        const { timeLesson } = item[0]
        return(
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>
                    {
                        oddOrEventElements({ item })
                    }
            </li>
        ) 
    }

    else {
        const { timeLesson } = item
        return (
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>
                    {
                        onlyObjects({ item })
                    }
            </li>
        )
    }
}
 
export default Schedule__item;