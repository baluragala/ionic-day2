import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import quotes from '../../data/quote';

import {QuotesPage} from "../quotes/quotes";

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: { category: string, quotes: { id: string, person: string, text: string }[], icon: string }[];
  quotesPage: QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToQuotesPage(quoteGroup) {
    this.navCtrl.push(QuotesPage, quoteGroup);
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
