import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
import {Widgets} from './widgets/widgets.component';
import {Demo} from './demo/demo.component';
import {WidgetsService} from './common/widgets.service';
import {PricingService} from './common/pricing.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService, ExperimentsService, WidgetsService, PricingService],
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/about',       component: AboutComponent },
  {path: '/experiments', component: ExperimentsComponent },
  {path: '/widgets',     component: Widgets},
  {path: '/demo',        component: Demo},
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
