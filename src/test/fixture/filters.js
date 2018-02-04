import Moment from 'moment';


const filter = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const altFilter = {
    text:'bill',
    sortBy:'amount',
    startDate:Moment(),
    endDate:undefined
}

export { filter,altFilter }