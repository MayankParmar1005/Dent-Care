import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AppointmentRecord {
    id: bigint;
    date: string;
    name: string;
    time: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAppointments(): Promise<Array<AppointmentRecord>>;
    submitAppointment(name: string, phone: string, date: string, time: string, message: string): Promise<{
        ok: boolean;
        message: string;
    }>;
}
