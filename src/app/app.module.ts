import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputPage } from '../pages/input/input';
import { ListsPage } from '../pages/lists/lists';
import { LoadingPage } from '../pages/loading/loading';
import { ModalsPage } from '../pages/modals/modals';
import { NavigationPage, NavigationDetailsPage } from '../pages/navigation/navigation';
import { PopoversPage, BasicPage } from '../pages/popovers/popovers';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { ToastPage } from './../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    NavigationPage, NavigationDetailsPage,
    PopoversPage, BasicPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    ToastPage,
    TogglePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    NavigationPage, NavigationDetailsPage,
    PopoversPage, BasicPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    ToastPage,
    TogglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
