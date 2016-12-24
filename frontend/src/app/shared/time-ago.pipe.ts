import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
    transform(value: number): string {
        const diff = Date.now() - (<any>new Date(value));
        const sign = Math.sign(diff);
        const seconds = Math.abs(Math.ceil(diff / 1000));
        let time: string;

        if(seconds < 60){
            time = `${seconds} seconds`;
        } else if(seconds < 3600){
            const minutes = Math.ceil(seconds / 60);
            time = `${minutes} minutes`;
        } else if(seconds < 86400){
            const hours = Math.ceil(seconds / 3600);
            time = `${hours} hours`;
        } else {
            const days = Math.ceil(seconds / 86400);
            time = `${days} days`
        }

        if(sign < 0){
            return `in ${time}`;
        } else {
            return `${time} ago`;
        }
    }
}