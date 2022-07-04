import {services} from "../../data/services";
import { servicesTypes } from "../types/services.types";

const {SELECT_SERVICE, FILTERED_SERVICES} = servicesTypes;

const initialState = {
    services,
    filteredServices:[],
    selected:null
}

const servicesReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_SERVICE:
            return{
                ...state,
                selected: state.services.find((service)=>service.id===action.serviceId),
            }
        case FILTERED_SERVICES:
            return{
                ...state,
                filteredServices:state.services.filter(service=>service.categoryId===action.categoryId),
            }
        default:
            return state;
    }
}

export default servicesReducer;