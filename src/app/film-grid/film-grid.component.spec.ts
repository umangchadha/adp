
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGridComponent } from './film-grid.component';

describe('FilmGridComponent', () => {
  let component: FilmGridComponent;
  let fixture: ComponentFixture<FilmGridComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
