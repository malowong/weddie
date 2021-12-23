import { ICreateEvent } from "./state"

export function createEventSuccess(event: ICreateEvent) {
    return {
        type: "@@event/CREATE_EVENT_SUCCESS" as const,
        event,
    }
}

export function createEventFailed(message: string) {
    return {
        type: "@@auth/CREATE_EVENT_FAILED" as const,
        message,
    }
}

export type IEventAction =
    | ReturnType<typeof createEventSuccess>
    | ReturnType<typeof createEventSuccess>
