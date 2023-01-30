import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoDoMilhaoComponent } from './caminho-do-milhao.component';

describe('CaminhoDoMilhaoComponent', () => {
  let component: CaminhoDoMilhaoComponent;
  let fixture: ComponentFixture<CaminhoDoMilhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminhoDoMilhaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminhoDoMilhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
