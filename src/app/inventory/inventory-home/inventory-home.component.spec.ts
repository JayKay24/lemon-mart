import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { AppMaterialModule } from '../../app-material.module'
import { InventoryHomeComponent } from './inventory-home.component'

describe('InventoryHomeComponent', () => {
  let component: InventoryHomeComponent
  let fixture: ComponentFixture<InventoryHomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppMaterialModule, NoopAnimationsModule],
      declarations: [InventoryHomeComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryHomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
