import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      pass: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  publicar() {
    if (this.form.value.pass === this.form.value.usuario) {
      this.toastCtrl.create({
        animated: true,
        duration: 40,
        position: 'top',
        message: 'Login correcto'
      }).then(toastEl => {
        toastEl.present();
        this.router.navigate(['/menu/' + this.form.value.usuario]);
      });
    } else {
      this.toastCtrl.create({
        animated: true,
        duration: 40,
        position: 'top',
        message: 'Login Incorrecto'
      }).then(toastEl => {
        toastEl.present();
        this.router.navigate(['/login']);
      });
    }
  }

}
