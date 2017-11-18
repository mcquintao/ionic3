import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  
  public nome_usuario:string = "Matheus Campos codigo";
  public objeto_feed = {
    titulo:"Matheus Campos",
    data:"November 5, 1955",
    descricao:"Estou criando um app de Química!",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comments: "11h ago"
  }

  public listaFilmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);

        this.listaFilmes = obj_return.results;

        console.log(obj_return)
      },
      error => {
        console.log(error)
      }
    );
  }

}
