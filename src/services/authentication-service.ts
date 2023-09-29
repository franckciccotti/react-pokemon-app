export default class AuthenticationService {
    static isAutenticated: boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAutenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);       
        });
    }
}