import { Component, Inject, OnInit } from '@angular/core';
import { MediaItem } from '../media-item';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../providers';


@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('[\\w\\-\\s/]+')
      ]),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    });
  }

  yearValidator(control: FormControl) {
    if(control.value.trim().length === 0){
      return null;
    }
    const year: number = parseInt(control.value, 10);
    const minYear: number = 1700;
    const maxyear: number = 2500;
    if(year >= minYear && year <= maxyear){
      return null;
    }else{
      return { 
        year: { min: minYear, max: maxyear } 
      };
    }


    // return (control: AbstractControl): ValidationErrors | null => {
    //   if(control.value.trim().length === 0){
    //       return null;
    //     }
    //     const year: number = parseInt(control.value, 10);
    //     const minYear: number = 1800;
    //     const maxyear: number = 2500;
    //     if(year >= minYear && year <= maxyear){
    //       return null;
    //     }else{
    //       return { 
    //         year: { min: minYear, max: maxyear } 
    //       };
    //     }
    // };
  }
  
  onSubmit(mediaItem : MediaItem){
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }

}
