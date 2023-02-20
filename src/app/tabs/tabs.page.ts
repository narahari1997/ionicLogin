import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async loginPage() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'login-modal-css',
      backdropDismiss: true,
    });
    return await modal.present();
  }

}
