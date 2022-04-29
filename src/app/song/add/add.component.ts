import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Filemp3 } from 'src/app/models/Filemp3';
import { SongService } from 'src/app/services/song.service';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {



  constructor(private _fb : FormBuilder, private http: HttpClient, private songService : SongService) { }

  addForm! : FormGroup;
  fileis64! : Filemp3;

  ngOnInit(): void {
    this.addForm = this._fb.group({
      file: [null, [ Validators.required]]
    }
    );
  }
     
     
  submit(){
    if(this.addForm.valid)
    {
        let filemp3 : Filemp3 = {...this.addForm.value};
        this.songService.addSong(filemp3).subscribe(base64 => {
          this.fileis64 = base64;
        });
    }else{
      this.addForm.markAllAsTouched();
    }
  }
  onChange($event:any){
    let file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e: any) => {
      this.addForm.get('file')?.setValue(e.target.result);
    }
  }
}
