import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFormulario } from './contato-formulario';

describe('ContatoFormulario', () => {
  let component: ContatoFormulario;
  let fixture: ComponentFixture<ContatoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
