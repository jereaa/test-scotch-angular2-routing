import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/models/user';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
    users: User[];

    constructor( private route: ActivatedRoute ) { }

    ngOnInit(): void {
        this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
    }
}
