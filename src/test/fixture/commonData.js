import Moment from 'moment';
export default [
{

    id:"123456789",
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0


},

{

    id:"123456789abcdefgh",
    description:'Rent',
    note:'',
    amount:19500,
    createdAt:Moment(0).subtract(4, 'days').valueOf()

},

{
    id:"123456789abcdefghijkl",
    description:'Credit card',
    note:'',
    amount:4500,
    createdAt:Moment(0).add(4, 'days').valueOf()

}

]
