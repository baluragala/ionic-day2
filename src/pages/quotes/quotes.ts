import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../services/quote.interface";


/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: { id: string, person: string, text: string }[], icon: string };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  isFavorite(quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this to favorite?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {

    const alert = this.alertCtrl.create({
      title: 'Rmove Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to remove this to favorite?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.quotesService.removeQuoteFromFavorites(quote)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });

    alert.present()
  }

}
