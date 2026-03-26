import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface NewsEvent {
    title: string;
    date: Time;
    imageUrl?: string;
    excerpt: string;
}
export interface LeadershipProfile {
    bio: string;
    title: string;
    name: string;
    imageUrl?: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    addLeadershipProfile(profile: LeadershipProfile): Promise<bigint>;
    addNewsEvent(news: NewsEvent): Promise<bigint>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllLeadershipProfiles(): Promise<Array<LeadershipProfile>>;
    getAllNewsEvents(): Promise<Array<NewsEvent>>;
    removeLeadershipProfile(id: bigint): Promise<void>;
    removeNewsEvent(id: bigint): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
