import { ICreateEvent } from "./state"

export function createEventSuccess(event: ICreateEvent) {
    return {
        type: "@@event/CREATE_EVENT_SUCCESS" as const,
        event,
    }
}

export function createEventFailed(message: string) {
    return {
        type: "@@event/CREATE_EVENT_FAILED" as const,
        message,
    }
}

export function getEventSuccess(event: ICreateEvent) {
    return {
        type: "@@event/GET_EVENT_SUCCESS" as const,
        event,
    }
}

export function getEventFailed(message: string) {
    return {
        type: "@@event/GET_EVENT_FAILED" as const,
        message,
    }
}

export type IEventAction =
    | ReturnType<typeof createEventSuccess>
    | ReturnType<typeof createEventFailed>
    | ReturnType<typeof getEventSuccess>
    | ReturnType<typeof getEventFailed>
