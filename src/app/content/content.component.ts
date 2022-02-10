import { InteractionService } from './../interaction.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  fname = new FormControl('');
  name!: string;
  $subs!: Subscription;

  constructor(private InteractionService:InteractionService) { }

  sendName(name: string){
    this.InteractionService.sendName(name);
  }
  ngOnInit(): void {
    this.$subs = this.InteractionService.receiveName().subscribe((d)=>{
      this.name=d;
    });
  }
  ngOnDestroy(): void {
      this.$subs.unsubscribe();
  }
  

}
