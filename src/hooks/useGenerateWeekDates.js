const useGenerateWeekDates = ( year, month, date ) => {
    function weekDates (year, month, date, staticDate,) {

            if(date < 7){
            date = 24
            month--
            }

            date -= 5

            let weekDates = []
            let weekDays = []

            while(weekDates.length < 20){
                if(date === 32){
                date = 1
                month++
                }

                const weekDate = new Date(`${year}-${month}-${date}`)

                if(!(weekDates.includes(weekDate.getDate()))){
                    weekDates.push(weekDate.getDate())
                    weekDays.push(weekDate.getDay())
                }
                date++
            }

            const index = weekDates.findIndex(item => item == staticDate)
            const slisedDates = weekDates.slice(index - 3, index + 4)
            const slisedDays = weekDays.slice(index - 3, index + 4)

            return { slisedDates, slisedDays }
    }

    return weekDates(year, month, date, date)
}
 
export  { useGenerateWeekDates };