import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../shared/models/user';

@Component({
    selector: 'app-about-user',
    templateUrl: './about-user.component.html',
    styleUrls: [ './about-user.component.scss' ]
})
export class AboutUserComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.data.forEach((data: { user: User }) => this.user = data.user);
    }

    goBack(): void {
        this.router.navigate([ '/about' ]);
    }

}
