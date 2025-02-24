import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchCardComponent } from './item-search-card.component';

describe('ItemSearchCardComponent', () => {
  let component: ItemSearchCardComponent;
  let fixture: ComponentFixture<ItemSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSearchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
