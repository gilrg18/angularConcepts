//VALUE providers use case 2: the right way of using vanilla javascript methods
//in this case localStorage
import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<any> ('local storage',{
    providedIn: 'root',
    factory() {
        return localStorage;
    }
});