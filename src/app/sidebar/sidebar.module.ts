import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { SearchItemPipe } from '../pipes/search-item.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule ],
    declarations: [ SidebarComponent,SearchItemPipe ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
