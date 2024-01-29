import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}//for available for application root level,if not component level
)
export class DependencyService{
    data:string="This is Dependency Injection "

}