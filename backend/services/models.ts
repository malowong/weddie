export interface User {
    id: number;
    email: string;
    password: string;
}

export interface SignupUser {
    email: string,
    password: string,
    nickname: string,
    phone: string,
    gender: 'M' | 'F' | '',
    district_id: number | null,
}

declare global {
    namespace Express {
        interface Request {
            user?: { id: number; phone: string };
        }
    }
}
