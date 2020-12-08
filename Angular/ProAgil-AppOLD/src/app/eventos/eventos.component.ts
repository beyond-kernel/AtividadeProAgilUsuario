import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"],
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  imgAltura = 50;
  imgMargem = 2;
  showImage = false;
  _filtroLista: string;

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this._filtroLista
      ? this.filtrarEvento(this.filtroLista)
      : this.eventos;
  }

  eventosFiltrados: any = [];

  // eventos: any = [
  //   {
  //     Eventoid: 1,
  //     Tema: "Angular",
  //     Local: "SP",
  //   },
  //   {
  //     Eventoid: 2,
  //     Tema: ".Net Core",
  //     Local: "RJ",
  //   },
  //   {
  //     Eventoid: 3,
  //     Tema: ".Net Core e Angular",
  //     Local: "MS",
  //   },
  // ];
  constructor(private http: HttpClient) {}

  alterImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEvento(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  getEventos() {
    this.http.get("https://localhost:5001/site/Evento").subscribe(
      (response) => {
        this.eventos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
