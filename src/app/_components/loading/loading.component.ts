import { Component, OnInit, Input } from '@angular/core';
import { LoadingService } from '../../_services';
import { Subject } from 'rxjs';
 
@Component({
 selector: 'app-loading',
 templateUrl: './loading.component.html',
 styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
 color = 'primary';
 mode = 'indeterminate';
 value = 50;
 isLoading: Subject<boolean> = this.loadingService.isLoading;
 
 constructor(
 private loadingService: LoadingService
 ) { }
 
 ngOnInit() {
 }
 
}