import { IEventAction } from "./actions";
import { IEventState } from "./state";

const initialState: IEventState = {
    isCreated: null,
    event: null,
    message: null,
}

export const eventReducers = (state: IEventState = initialState, action: IEventAction): IEventState => {
    switch (action.type) {
        case "@@event/CREATE_EVENT_SUCCESS":
            console.log("successsss")
            return {
                isCreated: true,
                event: action.event,
                message: null,
            }
        case "@@event/CREATE_EVENT_FAILED":
            console.log("faillllled")
            return {
                isCreated: false,
                event: null,
                message: null,
            }
        case "@@event/GET_EVENT_SUCCESS":
            console.log("successsss")
            return {
                isCreated: true,
                event: action.event,
                message: null,
            }
        case "@@event/GET_EVENT_FAILED":
            console.log("faillllled")
            return {
                isCreated: false,
                event: null,
                message: null,
            }
        default:
            return state
    }
}