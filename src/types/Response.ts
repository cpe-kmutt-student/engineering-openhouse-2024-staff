export type UserResponse = {
    id: string;
    username: string;
    department_name: string;
}

export type EventResponse = {
    id: string;
    detail: string;
    department_name: string;
};
export type UserResult = {
    prefix: string
    firstName: string
    lastName: string
    phone: string
    email: string
    profileUrl: string
    currentProvince: string
    schoolName?: string
    schoolProvince?: string
    reward_1?: boolean
    reward_2?: boolean
    form_submit?: boolean
}