import { Directive, Input, ElementRef } from '@angular/core';
import { UserRole } from 'src/domain/user-role';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  @Input() appRole: UserRole[];

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.hasRole(this.appRole)) {
      this.elementRef.nativeElement.style = 'display: none;';
    }
  }

}
