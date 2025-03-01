import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentsService } from 'src/app/Services/departaments.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  departament: any
  loading=true
  constructor(
    private activatedRoute:ActivatedRoute,
    private departamentsService: DepartamentsService,
    ){
     this.init()
  }

  async init(){
    try{
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      if(id){
        this.departament = await this.departamentsService.getById(id);
        this.loading= false;
      }
    }
    catch(e){
      console.log(e)
    }
  }
}
