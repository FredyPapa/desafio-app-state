import {servicesTypes} from "../types/services.types";

const {SELECT_SERVICE, FILTERED_SERVICES} = servicesTypes;

export const selectService = (id) =>({
    type: SELECT_SERVICE,
    serviceId: id
});

export const filteredServices = (id) =>({
    type: FILTERED_SERVICES,
    categoryId: id
});