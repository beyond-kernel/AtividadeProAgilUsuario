import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsuarioService } from '../_services/usuario.service';
import { Usuario } from '../_models/usuario';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';


defineLocale('pt-br', ptBrLocale);


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  usuario: Usuario;
  filterLista: string;
  registerForm: FormGroup;
  modoSalvar = 'post';
  bodyDeletarUsuario = '';
  dataAtual = new Date().getMilliseconds().toString();

  constructor(private usuarioService: UsuarioService,
              private modalService: BsModalService,
              private fb: FormBuilder,
              private localeService: BsLocaleService,
              private toastr: ToastrService){this.localeService.use('pt-br');
            }

  get filtroLista(): string {
    return this.filterLista;
  }
  set filtroLista(value: string) {
    this.filterLista = value;
    this.usuariosFiltrados = this.filterLista
      ? this.filtrarUsuario(this.filtroLista)
      : this.usuarios;
  }

  usuariosFiltrados: Usuario[];

  // usuarios: any = [
  //   {
  //     Usuarioid: 1,
  //     Tema: 'Angular',
  //     Local: 'SP',
  //   },
  //   {
  //     Usuarioid: 2,
  //     Tema: '.Net Core',
  //     Local: 'RJ',
  //   },
  //   {
  //     Usuarioid: 3,
  //     Tema: '.Net Core e Angular',
  //     Local: 'MS',
  //   },
  // ];




  ngOnInit() {
    this.validation();
    this.getUsuarios();
  }

  openModal(template: any){
    this.registerForm.reset();
    template.show();
  }

  editarUsuario(usuario: Usuario, template: any){
    this.modoSalvar = 'put';
    this.openModal(template);
    this.usuario = Object.assign({}, usuario);
    this.registerForm.patchValue(this.usuario);
  }

  excluirUsuario(usuario: Usuario, template: any) {
    this.openModal(template);
    this.usuario = usuario;
    this.bodyDeletarUsuario = `Tem certeza que deseja excluir o Usuario: ${usuario.nome}`;
  }

  confirmeDelete(template: any) {
    this.usuarioService.deleteUsuario(this.usuario).subscribe(
      () => {
          template.hide();
          this.getUsuarios();
          this.toastr.success('Usuario deletado com sucesso', this.usuario.nome);
          location.reload();
        }, error => {
          this.toastr.error(`Erro ao deletar usuario: ${error}`, this.usuario.nome);
          console.log(error);
        }
    );
  }

  novoUsuario(template: any){
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid){
      if (this.modoSalvar === 'post'){
      this.usuario = Object.assign({}, this.registerForm.value);

      this.usuarioService.postUsuario(this.usuario).subscribe(
        (newEvent: Usuario) => {
          console.log(newEvent);
          template.hide();
          this.getUsuarios();
          this.toastr.success('Usuario inserido com sucesso', this.usuario.nome);
        }, error => {
          console.log(error);
          this.toastr.error(`Erro ao salvar usuario: ${error}`, this.usuario.nome);
        }
      );
      }
      else{
        this.usuario = Object.assign({id: this.usuario.id }, this.registerForm.value);
        // const nameFile = this.usuario.imagemUrl.split('\\', 3);
        this.usuarioService.putUsuario(this.usuario).subscribe(
          () => {
            template.hide();
            this.getUsuarios();
            this.toastr.success('Usuario atualizado com sucesso', this.usuario.nome);
          }, error => {
            console.log(error);
            this.toastr.error(`Erro ao atualizar usuario: ${error}`, this.usuario.nome);
          }
        );
      }
    }
  }

validation(){
  this.registerForm = this.fb.group({
    nome: [Validators.required],
    sobrenome: [Validators.required],
    email: [Validators.required, Validators.email],
    dataNascimento: [Validators.required, Validators.pattern('/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/')],
    escolaridade: [Validators.required]
  });
}

  filtrarUsuario(filtrarPor: string): Usuario[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.usuarios.filter(
      (usuario) => usuario.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  getUsuarios() {
    this.usuarioService.getAllUsuario().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.log(error);
        this.toastr.error(`Erro ao carregar usuario`, 'Usuario');
      }
    );
  }
}
