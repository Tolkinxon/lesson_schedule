

const useGenerateWeekDates = ( date ) => {

    let slisedDates = [], slisedDays = []

    for(let i = date - 3; i <= date + 3; i++){

        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + i);

        slisedDates.push(tomorrow.getDate())
        slisedDays.push(tomorrow.getDay())

        console.log(tomorrow);
    }
    

    return { slisedDates, slisedDays }
}
 
export  { useGenerateWeekDates };