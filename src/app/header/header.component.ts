import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name!: string;

  constructor(private InteractionService:InteractionService) { }

  ngOnInit(): void {
    this.InteractionService.receiveName().subscribe((d)=>{
      this.name = d;
    })
  }

}
