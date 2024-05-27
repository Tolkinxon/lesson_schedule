
const oddOrEventElements = ({ item }) => {

   const element = item.map(element => {
            const { timeLesson, subjectName, teacher, numberRoom, subjectType } = element
            let color = ''
            return (
           
                    <div className="schedule__item-body odd" style={{backgroundColor: color}}>
                        <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>

                        <p className="schedule__item-teacher">{ teacher }</p>

                        <p className="schedule__item-room">{ `${ subjectType } ${ numberRoom }-xona` }</p>
                    </div>
     
            )
    });

    return ( 
        <li className="schedule__item">
            {element}
        </li>
    );
}

const onlyObjects = ({ item }) => {

    const { timeLesson, subjectName, teacher, numberRoom, subjectType } = item

    let color = ''
    // switch(idx) {
    //     case 0: color = '#DE496E'; break;
    //     case 1: color = '#8572FF'; break;
    //     case 2: color = '#2E97A7'; break;
    //     default: console.log('something went wrong');
    // }


    return ( 
            <li className="schedule__item">
                <div className="schedule__item-header">
                    <span className="schedule__item-time" >{ timeLesson }</span>
                    <span className="schedule__item-line" ></span>
                </div>

                <div>
                    <div className="schedule__item-body" style={{backgroundColor: color}}>
                        <h3 className="schedule__item-subject" style={{color}}>{ subjectName }</h3>

                        <p className="schedule__item-teacher">{ teacher }</p>

                        <p className="schedule__item-room">{ `${ subjectType } ${ numberRoom }-xona` }</p>
                    </div>
                </div>
            </li>
    );
}
 


const Schedule__item = ({ item }) => {

    console.log(item.id);

    if(item.id == undefined){
        return oddOrEventElements({ item })
    }

    else {
        return onlyObjects({ item })
    }
}
 
export default Schedule__item;