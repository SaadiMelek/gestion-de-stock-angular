import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-ctl-frs',
  templateUrl: './nouvelle-cmd-ctl-frs.component.html',
  styleUrls: ['./nouvelle-cmd-ctl-frs.component.scss']
})
export class NouvelleCmdCtlFrsComponent implements OnInit {

  origin = '';
  
  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });
  }

}
