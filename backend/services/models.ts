export interface User {
    id: number;
    phone: string;
    password: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: { id: number; phone: string };
        }
    }
}
